const db = require('../config/conn');
const {FakultasModel} = require('../models');
class FakultasController{
    getAll(req,res){
        let querySelectAll = new FakultasModel().querySelectAllWithJurusan;
        if(req.user && req.user.jurusan_id && req.user.hak_akses === 'admin'){
          querySelectAll = new FakultasModel().getJurusanById(req.user.jurusan_id);
        }
        db.query(querySelectAll,(err,result)=>{

            if(err) return res.status(400).json(err);
            if(result.length > 0){
                let data =[];
                result.forEach(r=>{
                    if(data.filter(d=>d.fakultas === r.fakultas).length === 0){
                        data.push({
                            fakultas:r.fakultas,
                            singkatan:r.singkatan,
                            jurusan:[]
                        });
                    }

                    data.forEach(dd=>{
                        if(dd.fakultas === r.fakultas){
                            dd.jurusan.push({
                                nama:r.jurusan,
                                prodi:r.prodi,
                                kodeJurusan:r.kodeJurusan,
                                akreditasi:r.akreditasi
                            })
                        }
                    })

                })

                return res.status(200).json(data);
            }
            if(result.length == 0){
                return res.status(200).json('NO DATA');
            }
        })
    }

}

module.exports = new FakultasController();
