const db = require('../config/conn');
const JurusanModel = require('../models/Jurusan');
class JurusanController{
    getAll(req,res){
        let querySelectAll = new JurusanModel().SelectAll;

        // if(req.user && req.user.jurusan_id && req.user.hak_akses === 'admin'){
        //   querySelectAll = new JurusanModel().selectById;
        //
        // }
        db.query(querySelectAll,(err,result)=>{
            if(err) return res.status(400).json(err);
            if(result){
                return res.status(200).json(result);
            }
        })
    }

}

module.exports = new JurusanController();
