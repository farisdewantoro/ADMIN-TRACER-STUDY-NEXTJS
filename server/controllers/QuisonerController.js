const db = require('../config/conn');
const {QuisonerModel} = require('../models');
// const { ValidationMahasiswa } = require('../validations');
const async = require('async');
class QuisonerController{
    create(req,res){
    //   TODO:VALIDATION
        let quisoner =req.body.quisoner;
        let q_pertanyaan = req.body.q_pertanyaan.map(qp=>{
            return{
                kode:qp.kode,
                pertanyaan:qp.pertanyaan
            }
        });
   

        const queryInsertQuisoner = new QuisonerModel().insertQuisoner;
        const queryInsertQ_pertanyaan = new QuisonerModel().insertQ_pertanyaan;
        const queryInsertQ_jawaban= new QuisonerModel().insertQ_jawaban;
        async.waterfall([
            function Quisoner(callback){
                db.query(queryInsertQuisoner,[quisoner],(err,result)=>{
                    if (err) callback(err);
                    if (result) {
                    
                        const lastId = result.insertId;
                        callback(null, lastId);
                    }
                })
            },
            function Q_pertanyaan(arg1,callback){
                let quisoner_id = arg1;
                const  Nq_pertanyaan = q_pertanyaan.map(qp=>{
                  return [
                        quisoner_id,
                        qp.kode,
                        qp.pertanyaan
                    ]
               
                });
            
                db.query(queryInsertQ_pertanyaan, [Nq_pertanyaan],(err,result)=>{
                    if (err) callback(err);
                    if (result) {
                        let lastIdPertanyaan = result.insertId;
                        console.log(lastIdPertanyaan)
                        callback(null, lastIdPertanyaan);
                    }
                })
            },
            function Q_jawaban(arg2, callback){
                let id = arg2;
                let q_jawaban = req.body.q_pertanyaan.map((qp, i) => qp.q_jawaban);
                let newD = [];
                q_jawaban.forEach((qj, i) => {
                    qj.forEach(j => {
                        newD.push([
                            id+i,
                            j.kode,
                            j.jawaban,
                            j.additional ? 1 :0
                        ]);
                    })
                });
                db.query(queryInsertQ_jawaban, [newD],(err,result)=>{
                    if (err) callback(err);
                    if (result) {
                       
                        callback(null, newD);
                    }
                })
            },
            function Q_jawabanLainnya(arg3,callback){
                let q_jawaban = req.body.q_pertanyaan.map((qp, i) => qp.q_jawaban);
                let newD = [];
                q_jawaban.forEach((qj, i) => {
                    qj.forEach(j => {
                        newD.push({
                            kode: j.kode,
                            jawaban: j.jawaban,
                            additional: j.additional ? 1 : 0,
                            q_jawaban_lainnya: j.q_jawaban_lainnya
                        });
                    })
                });
                let q_jawabanLainnya = newD.filter(a => a.additional === 1).map(qj => {
                    return {
                        kode:qj.kode,
                        description:(typeof qj.q_jawaban_lainnya === 'object' && qj.q_jawaban_lainnya.description) ? qj.q_jawaban_lainnya.description : 0
                    }
                }); 
                if (q_jawabanLainnya.length === 0 ){
                    callback(null,'ok');
                }else{
                let queryData = [];
                q_jawabanLainnya.forEach(qj => {
                    queryData.push((
                        `((SELECT id from q_jawaban where kode = '${qj.kode}'),'${
                        qj.description}')`).toString()
                    )
                })
                queryData = queryData.toString();
                let queryInsertQ_jawabanLainnya =`
                INSERT INTO q_jawaban_lainnya (q_jawaban_id,description) values ${queryData}`;
                db.query(queryInsertQ_jawabanLainnya,(err,result)=>{
                    callback(err,result);
                })
                }
            }
        ], function (err, result) {
            
            if (err) return res.status(400).json(err);
            if (result) {
                return res.status(200).json(result);
            }
        })
        
    }
    getAll(req,res){
        const querSelectQuisoner = new QuisonerModel().selectQuisoner;
        async.parallel({
            quisoner:function(callback){
                db.query(querSelectQuisoner,(err,result)=>{
                    callback(err,result);
                })
            }
        },function(err,result){
                 if (err) return res.status(400).json(err);
            if (result) {
                return res.status(200).json(result);
            }
        })
    }
}

module.exports = new QuisonerController();
