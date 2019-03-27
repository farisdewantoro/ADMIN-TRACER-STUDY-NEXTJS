const db = require('../config/conn');
const  {ValidationAuth} = require('../validations');
const async = require('async');
const {AdminModel} = require('../models');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const passport = require('passport');
class AuthController{
    signin(req,res,next){
        let { errors, isValid } = ValidationAuth.ValidationLogin(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        // const {username,password} = req.body;
        // const queryLogin = new AdminModel().Login; 
        // const queryCheck = new AdminModel().SelectAdmin;
        // db.query(queryCheck,[username],(err,result)=>{
        //     if(err){
        //         let errors = 'USERNAME ATAU PASSWORD SALAH';
        //         return res.status(400).json({ errors });
        //     }
        //     if(result.length === 0){
        //         let errors = 'USERNAME ATAU PASSWORD SALAH';
        //         return res.status(400).json({ errors });
        //     }
        //     if(result.length > 0){
        //         bcrypt.compare(result[0].password,password)
        //             .then(isMatch=>{

        //             })
        //             .catch(err=>{
        //                 let errors = 'USERNAME ATAU PASSWORD SALAH';
        //                 return res.status(400).json({ errors });
        //             })
        //     }
        // })
     
        passport.authenticate('local', function (err, user, info) {

            if (err) { return next(err); }
            if (!user) { return res.status(400).json({ errors:{
                message: info.message 
            }}) }
            req.login(user, function (err) {
                if (err) { return next(err); }
                if (user) {
                    return res.status(200).json(user);
                }
            });




        })(req, res, next);
        
       
    }
}

module.exports = new AuthController();