import keys from '../config/keys';
import db from './conn';
import UAparser from 'ua-parser-js';
import jwt from 'jsonwebtoken';
import async from 'async';
export const ensureSession = (req, res, next) => {
 
    
    if(!req.sessionID || typeof req.sessionID === "undefined" ||  req.sessionID == '' || req.sessionID == null){
        return res.status(400).json({ error: true, session: false, message: "YOU SESSION HAS BEEN EXPIRED" });
    }
    if (req.session.visitor) {
        return next();
    }else{
   
    let ua = UAparser(req.headers['user-agent']);
    let ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip_address.substr(0, 7) == "::ffff:") {
        ip_address = ip_address.substr(7)
    }
        req.session.regenerate(function (err) {
            let queryInsertSession = `INSERT INTO session (id,ip_address) values ('${req.sessionID}','${ip_address}')`;
            let queryInsertSessionBrowserAndEngineOs = (table) => {
                return `INSERT INTO ${table} set session_id = (SELECT ss.id from session as ss where id = '${req.sessionID}' and ss.ip_address = '${ip_address}'), ?   `;
            }
            let queryInsertDevice = `INSERT INTO session_device set session_id = (SELECT ss.id from session as ss where id = '${req.sessionID}' and ss.ip_address = '${ip_address}'), ?`;
            let browser = {};
            let device = {};
            let engine = {};
            let os = {};

            Object.keys(ua).forEach(key => {
                switch (key) {
                    case 'browser':
                        if (Object.keys(ua[key]).length > 0) {
                            Object.keys(ua[key]).forEach(k => {
                                if (typeof ua[key][k] !== "undefined") {
                                    browser[k] = ua[key][k];
                                }
                            })
                        }

                        break;
                    case 'device':
                        if (Object.keys(ua[key]).length > 0) {
                            Object.keys(ua[key]).forEach(k => {
                                if (typeof ua[key][k] !== "undefined") {
                                    device[k] = ua[key][k];
                                }
                            })
                        }
                        break;
                    case 'engine':
                        if (Object.keys(ua[key]).length > 0) {
                            Object.keys(ua[key]).forEach(k => {
                                if (typeof ua[key][k] !== "undefined") {
                                    engine[k] = ua[key][k];
                                }
                            })
                        }
                        break;
                    case 'os':
                        if (Object.keys(ua[key]).length > 0) {
                            Object.keys(ua[key]).forEach(k => {
                                if (typeof ua[key][k] !== "undefined") {
                                    os[k] = ua[key][k];
                                }
                            })
                        }
                        break;
                    default:
                        break;
                }
            });
            if (Object.keys(browser).length == 0) {
                let notification = {
                    error: true,
                    message: "There is an error !",
                    notification: true
                }
                return res.status(400).json({ notification: notification });
            } else {



                async.parallel({
                    u: function (callback) {
                        db.query(queryInsertSession, (err, result) => {
                            callback(err, 'OK');
                        })
                    },
                    b: function (callback) {
                        if (Object.keys(browser).length > 0) {
                            db.query(queryInsertSessionBrowserAndEngineOs('session_browser'), browser, (err, result) => {
                                callback(err, "OK");
                            })
                        } else {
                            callback(null, null);
                        }
                    },
                    d: function (callback) {
                        if (Object.keys(device).length > 0) {
                            db.query(queryInsertDevice, device, (err, result) => {
                                callback(err, "OK");
                            })
                        } else {
                            callback(null, null);
                        }
                    },
                    e: function (callback) {
                        if (Object.keys(engine).length > 0) {
                            db.query(queryInsertSessionBrowserAndEngineOs('session_engine'), engine, (err, result) => {
                                callback(err, "OK");
                            })
                        } else {
                            callback(null, null);
                        }
                    },
                    o: function (callback) {
                        if (Object.keys(os).length > 0) {
                            db.query(queryInsertSessionBrowserAndEngineOs('session_os'), os, (err, result) => {
                                callback(err, "OK");
                            })
                        } else {
                            callback(null, null);
                        }
                    }
                }, function (err, results) {
                    if (err) {
                        let notification = {
                            error: true,
                            message: "There is an error !",
                            notification: true
                        }
                        return res.status(400).json(err);
                    } else {
                        let payload = {
                            session_id: req.sessionID,
                            ip_address: ip_address
                        }
                        // let dataToken = jwt.sign(payload, keys.jwt.secretOrPrivateKey, { expiresIn: keys.jwt.expiresIn });
                        // res.cookie("hammerstout_ss", dataToken, { sameSite: true });
                        req.session.visitor = payload;
                        return next();
                    }

                });

            }
        })
 
   
    }

   

    
}