const Router = require('express').Router;
const {
    JurusanController,
    MahasiswaController,
    AuthController,
    AdminController,
    FakultasController,
    QuisonerController
} = require('../controllers');
class AppRouter{
    constructor(){
        this.router = Router();
        this.buildRoutes();
    }
    buildRoutes(){
        this.router.post('/api/quisoner/create', QuisonerController.create);
        this.router.get('/api/quisoner/get-all', QuisonerController.getAll);


        this.router.post("/api/auth/login",AuthController.signin);
        this.router.post("/api/auth/logout", AuthController.logout);
        

        this.router.get('/api/jurusan/get-all',JurusanController.getAll);
        this.router.get('/api/fakultas/get-all', FakultasController.getAll);


        this.router.post('/api/mahasiswa/create', MahasiswaController.create);
        this.router.get('/api/mahasiswa/get-all', MahasiswaController.getAll);
        this.router.delete('/api/mahasiswa/delete', MahasiswaController.delete);
        this.router.get('/api/mahasiswa/get/:nrp', MahasiswaController.edit);
        this.router.put('/api/mahasiswa/update/:nrp', MahasiswaController.update);
        this.router.post('/api/mahasiswa/add/pekerjaan', MahasiswaController.addPekerjaan);
        this.router.put('/api/mahasiswa/update/pekerjaan/:nrp', MahasiswaController.updatePekerjaan);
        this.router.delete('/api/mahasiswa/delete/pekerjaan/:id',MahasiswaController.deletePekerjaan);

        this.router.post('/api/mahasiswa/add/prestasi', MahasiswaController.addPrestasi);
        this.router.get('/api/mahasiswa/getall/pekerjaan',MahasiswaController.getAllPekerjaan)
        this.router.get('/api/mahasiswa/getall/prestasi',MahasiswaController.getAllPrestasi)
        this.router.get('/api/mahasiswa/edit/pekerjaan/:nrp',MahasiswaController.getPekerjaan);
        this.router.get('/api/mahasiswa/edit/prestasi/:nrp',MahasiswaController.editPrestasi);
        this.router.put('/api/mahasiswa/update/prestasi/:nrp',MahasiswaController.updatePrestasi);
        this.router.delete('/api/mahasiswa/delete/prestasi/:id',MahasiswaController.deletePrestasi);
        this.router.post('/api/admin/create-master',AdminController.createMaster);
        this.router.post('/api/admin/create-admin', AdminController.createAdmin);
        this.router.get('/api/admin/get-all', AdminController.getAll);
    }
}

const appRouter = new AppRouter();

module.exports = appRouter.router;
