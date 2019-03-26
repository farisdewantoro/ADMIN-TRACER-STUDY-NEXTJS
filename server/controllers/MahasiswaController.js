const db = require('../config/conn');
const MahasiswaModel = require('../models/Mahasiswa');
const { ValidationMahasiswa } = require('../validations');
const async = require('async');
class MahasiswaController{
    create(req,res){
        let { errors, isValid } = ValidationMahasiswa.ValidationCreate(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        let mahasiswa = req.body.mahasiswa;
        let queryInsertMahasiswa = new MahasiswaModel().InsertMahasiswa;
        let queryInsertLulusan = new MahasiswaModel().InsertLulusan;
        if(mahasiswa.jurusan){
            mahasiswa.jurusan_id = mahasiswa.jurusan.value;
            delete mahasiswa.jurusan; 
        }

        async.waterfall([
              function Mahasiswa(callback){
                db.query(queryInsertMahasiswa, [mahasiswa], (err, result) => {
                    if (err) callback(err);
                    if (result) {
                        let lastId = result.insertId;
                        callback(null, lastId);
                    }
                });
            },
              function Lulusan(arg1,callback){
                  let lulusan = req.body.lulusan;
                  lulusan.mahasiswa_id = arg1;
                  db.query(queryInsertLulusan, [lulusan], (err, result) => {
                      if (err) callback(err);
                      if(result){
                          callback(null, result);
                      }  
                });
            }
        ],function(err,result){
         
             if (err) return res.status(400).json(err);
             if (result) {
                return res.status(200).json(result);
            }
        })
    }
    getAll(req,res){
        let querySelectAll = new MahasiswaModel().SelectWithJurusan;
        db.query(querySelectAll,(err,result)=>{
            if (err) return res.status(400).json(err);
            if (result) {
                return res.status(200).json(result);
            }
        })
    }
}

module.exports = new MahasiswaController();