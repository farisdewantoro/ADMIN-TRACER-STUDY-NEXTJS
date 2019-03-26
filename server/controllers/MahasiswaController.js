const db = require('../config/conn');
const MahasiswaModel = require('../models/Mahasiswa');
const { ValidationMahasiswa } = require('../validations');
class MahasiswaController{
    create(req,res){
        let { errors, isValid } = ValidationMahasiswa.ValidationCreate(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        

        return res.status(200).json(req.body);
    }
}

module.exports = new MahasiswaController();