const routes = require('next-routes')

module.exports = routes()
    .add('dashboard', '/dashboard', 'dashboard')
    .add('home', '/','dataAlumni')
    .add('login','/login','login')
    .add('tes','/login/tes','dashboard')
    .add('identitas', '/identitas', 'identitas')
    .add('dataAlumni','/data-alumni','dataAlumni')
    .add('addDataAlumni','/data-alumni/create','dataAlumni/create')
    .add('EditDataMahasiswa', '/data-alumni/edit/:nrp', 'dataAlumni/editData')
    .add('dataQuisoner', '/data-quisoner', 'quisoner')
    .add('editQuisoner', '/data-quisoner/create', 'quisoner/create')
    .add('dataJurusan','/data-jurusan','dataJurusan')
    .add('CreateDataJurusan', '/data-jurusan/create', 'dataJurusan/create')
    .add('dataAdminJurusan', '/data-admin-jurusan', 'dataAdminJurusan')
    .add('dataAdminJurusanCreate', '/data-admin-jurusan/create', 'dataAdminJurusan/create')
    .add('dataPekerjaan','/data-pekerjaan','dataPekerjaan')
    .add('dataPekerjaanCreate', '/data-pekerjaan/create', 'dataPekerjaan/create')
    .add('dataPekerjaanEdit', '/data-pekerjaan/edit/:nrp', 'dataPekerjaan/edit')
    .add('dataPrestasi','/data-prestasi','dataPrestasi')
    .add('dataPrestasiCreate','/data-prestasi/create','dataPrestasi/create')
    .add('dataPrestasiEdit', '/data-prestasi/edit/:nrp', 'dataPrestasi/edit')
    ;

// module.exports=()=>{
//     return{
//         "/":{page:"/"},
//         "login":{page:"/login"},
//         "/404":{page:"/404"}
//     }
// }
