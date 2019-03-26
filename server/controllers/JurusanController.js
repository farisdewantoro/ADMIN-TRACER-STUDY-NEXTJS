const db = require('../config/conn');
const {JurusanModel} = require('../models');
class JurusanController{
    getAll(req,res){
        let querySelectAll = new JurusanModel().SelectAll;
        db.query(querySelectAll,(err,result)=>{
            if(err) return res.status(400).json(err);
            if(result){
                return res.status(200).json(result);
            }
        })
    }

}

module.exports = new JurusanController();