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
 
}

module.exports = new AdminController();