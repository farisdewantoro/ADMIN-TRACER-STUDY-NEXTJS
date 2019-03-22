const db = require('../config/conn');
const MahasiswaModel = require('../models/Mahasiswa');
const  {ValidationAuth} = require('../validations');

class AuthController{

    signin(req,res){
        let { errors, isValid } = ValidationAuth.ValidationLogin(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const {nrp,kodePIN} = req.body;
        const queryLogin = new MahasiswaModel().Login; 
        db.query(queryLogin,[nrp,kodePIN],(err,result)=>{
            if(err){
                 let errors = 'NRP ATAU KODEPIN SALAH';
                return res.status(400).json({errors});
            }
            if (result.length === 0) {
                let errors = 'NRP ATAU KODEPIN SALAH';
                return res.status(400).json({ errors });
            }
            if(result.length > 0){
                let notification = {
                    error: true,
                    message:"200",
                    notification: true
                }
                let data =result[0];
                return res.status(200).json({notification,data});
            }
        })
        
       
    }
}

module.exports = new AuthController();