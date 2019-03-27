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

    update(req, res) {
        let querySelectM = new MahasiswaModel().selectMahasiswa;
        db.query(querySelectM, [req.params.nrp], (err, result) => {
            if (err) return res.status(400).json(err);
            if (result.length === 0) {
                return res.status(400).json('MAHASISWA TIDAK TERDAFTAR');
            }
        });

        let { errors, isValid } = ValidationMahasiswa.ValidationCreate(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        let mahasiswa = req.body.mahasiswa;
        let nrp = req.params.nrp;
        let queryUpdateMahasiswa = new MahasiswaModel().UpdateMahasiswa;
        let queryUpdateLulusan = new MahasiswaModel().UpdateLulusan;
        if (mahasiswa.jurusan) {
            mahasiswa.jurusan_id = mahasiswa.jurusan.value;
            delete mahasiswa.jurusan;
        }

        async.waterfall([
            function Mahasiswa(callback) {
                db.query(queryUpdateMahasiswa, [mahasiswa, nrp], (err, result) => {
                    if (err) callback(err);
                    if (result) {
                        let lastId = mahasiswa.id;
                        callback(null, lastId);
                    }
                });
            },
            function Lulusan(arg1, callback) {
                let lulusan = req.body.lulusan;
                db.query(queryUpdateLulusan, [lulusan, arg1], (err, result) => {
                    if (err) callback(err);
                    if (result) {
                        callback(null, result);
                    }
                });
            }
        ], function (err, result) {

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
    delete(req,res){
        let queryDelete = new MahasiswaModel().deleteMahasiswa;
        db.query(queryDelete,[req.body.mahasiswa_id],(err, result) => {
            if (err) return res.status(400).json(err);
            if (result) {
                let querySelectAll = new MahasiswaModel().SelectWithJurusan;
                db.query(querySelectAll, (err, result) => {
                    if (err) return res.status(400).json(err);
                    if (result) {
                        return res.status(200).json(result);
                    }
                })
            }
        })
    }
    edit(req,res){
        let querySelectM = new MahasiswaModel().selectMahasiswa;
       let querySelectL = new MahasiswaModel().selectLulusan;
        async.parallel({
            mahasiswa:function(callback){
                db.query(querySelectM, [req.params.nrp], (err, result) => {
                    callback(err,result);
                });
            },
            lulusan:function(callback){
                db.query(querySelectL, [req.params.nrp], (err, result) => {
                    callback(err, result);
                });
            }
        },function(err,result){
                if (err) return res.status(400).json(err);
                if (result) {
                    return res.status(200).json(result);
                }
        })
    }
}

module.exports = new MahasiswaController();