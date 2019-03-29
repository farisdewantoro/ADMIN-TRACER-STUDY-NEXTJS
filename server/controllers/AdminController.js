const db = require('../config/conn');
const async = require('async');
const {AdminModel} = require('../models');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const {ValidationAuth} = require('../validations');
class AdminController{
    createMaster(req,res){
  
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(req.body.password, salt, (err, hash)=>{
                if (err) {
                    throw err;
                }
                if (hash) {
                
                    let queryInsert = new AdminModel().createAdminMaster;
                    let data={
                        username:req.body.username,
                        password:hash,
                        hak_akses:'master'
                    };
                    let hak_akses = jwt.sign(data, keys.jwt.secretOrPrivateKey);
                    data.hak_akses = hak_akses;
                    db.query(queryInsert, [data], (err, result) => {
                        if (err) return res.status(400).json({ error: true, message: "error from register" });
                        if (result) {
                            return res.status(200).json({ error: false, message: "SUCCESS REGISTER" });
                        }
                    })
                }
            })
        })
    }
    createAdmin(req,res){
        // TODO :: VALIDATION
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                if (hash) {

                    let queryInsertAdmin = new AdminModel().createAdmin;
                    let queryInsertAdminJurusan = new AdminModel().createAdminJurusan;

                    let data = {
                        username: req.body.username,
                        password: hash,
                        hak_akses: 'admin'
                    };
                    let hak_akses = jwt.sign(data, keys.jwt.secretOrPrivateKey);
                    data.hak_akses = hak_akses;
                    async.waterfall([
                        function Admin(callback){
                            db.query(queryInsertAdmin,[data],(err,result)=>{
                                if (err) callback(err);
                                if (result) {
                                    let lastId = result.insertId;
                                    callback(null, lastId);
                                }
                            });
                 
                        },
                        function AdminJurusan(arg1, callback){
                            let dataJurusan = {
                                admin_id: arg1,
                                jurusan_id: req.body.jurusan.value
                            }
                            db.query(queryInsertAdminJurusan, [dataJurusan], (err, result) => {
                                if (err) callback(err);
                                if (result) {
                                    callback(null, result);
                                }
                            })
                        }
                    ],function(err,result){
                            if (err) return res.status(400).json({ error: true, message: "error from register" });
                            if (result) {
                                return res.status(200).json({ error: false, message: "SUCCESS REGISTER" });
                            }
                    })
             
                }
            })
        })
    }
 
}

module.exports = new AdminController();