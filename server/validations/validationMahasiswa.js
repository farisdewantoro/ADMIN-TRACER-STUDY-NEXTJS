
const Validator = require('validator');
const isEmpty = require('./is-empty');

class ValidationMahasiswa{
     ValidationCreate (data){
        let errors = {
            lulusan:{},
            mahasiswa:{}
        }
         let dateNow = new Date();
        data.mahasiswa.nrp = !isEmpty(data.mahasiswa.nrp) ? data.mahasiswa.nrp : '';
        if (Validator.isEmpty(data.mahasiswa.nrp.toString())) errors.mahasiswa.nrp = '*Harus diisi';

        data.mahasiswa.kodePIN = !isEmpty(data.mahasiswa.kodePIN) ? data.mahasiswa.kodePIN : '';
        if (Validator.isEmpty(data.mahasiswa.kodePIN.toString())) errors.mahasiswa.kodePIN = '*Harus diisi';

         data.mahasiswa.alamat = !isEmpty(data.mahasiswa.alamat) ? data.mahasiswa.alamat : '';
         if (Validator.isEmpty(data.mahasiswa.alamat.toString())) errors.mahasiswa.alamat = '*Harus diisi';
        
         data.mahasiswa.email = !isEmpty(data.mahasiswa.email) ? data.mahasiswa.email : '';
         if (Validator.isEmpty(data.mahasiswa.email.toString())) errors.mahasiswa.email = '*Harus diisi';
         if (!Validator.isEmail(data.mahasiswa.email)) errors.mahasiswa.email = '*Alamat email tidak sesuai';
        
         data.mahasiswa.jurusan = !isEmpty(data.mahasiswa.jurusan) ? data.mahasiswa.jurusan : '';
         if (Validator.isEmpty(data.mahasiswa.jurusan.toString())) errors.mahasiswa.jurusan = '*Harus diisi';

         data.mahasiswa.nama = !isEmpty(data.mahasiswa.nama) ? data.mahasiswa.nama : '';
         if (Validator.isEmpty(data.mahasiswa.nama.toString())) errors.mahasiswa.nama = '*Harus diisi';
       
         data.mahasiswa.noTelepon = !isEmpty(data.mahasiswa.noTelepon) ? data.mahasiswa.noTelepon : '';
         if (Validator.isEmpty(data.mahasiswa.noTelepon.toString())) errors.mahasiswa.noTelepon = '*Harus diisi';

         data.lulusan.ipk = !isEmpty(data.lulusan.ipk) ? data.lulusan.ipk : '';
         if (Validator.isEmpty(data.lulusan.ipk.toString())) errors.lulusan.ipk = '*Harus diisi';

         data.lulusan.judulTA = !isEmpty(data.lulusan.judulTA) ? data.lulusan.judulTA : '';
         if (Validator.isEmpty(data.lulusan.judulTA.toString())) errors.lulusan.judulTA = '*Harus diisi';
        
         data.lulusan.tanggalLulus = !isEmpty(data.lulusan.tanggalLulus) ? data.lulusan.tanggalLulus : '';
         if (Validator.isEmpty(data.lulusan.tanggalLulus.toString()) ) errors.lulusan.tanggalLulus = '*Harus diisi';

         if (!Validator.isEmpty(data.lulusan.tanggalLulus.toString()) && !Validator.isBefore(data.lulusan.tanggalLulus, dateNow.toDateString())) errors.lulusan.tanggalLulus = '*Tanggal tidak valid';

         data.lulusan.lamaTA = !isEmpty(data.lulusan.lamaTA.toString()) ? data.lulusan.lamaTA : '';
         if (Validator.isEmpty(data.lulusan.lamaTA.toString())) errors.lulusan.lamaTA = '*Harus diisi';

         if (Object.keys(errors.lulusan).length === 0){
             delete errors.lulusan;
         }
         if (Object.keys(errors.mahasiswa).length === 0) {
             delete errors.mahasiswa;
         }
        return {
            errors,
            isValid: isEmpty(errors)
        }
    }
  




}
 


module.exports = new ValidationMahasiswa();