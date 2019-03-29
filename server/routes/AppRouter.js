const Router = require('express').Router;
const {
    JurusanController,
    MahasiswaController,
    AuthController,
    AdminController
} = require('../controllers');
class AppRouter{
    constructor(){
        this.router = Router();
        this.buildRoutes();
    }
    buildRoutes(){
        this.router.post("/api/auth/login",AuthController.signin);
        this.router.post("/api/auth/logout", AuthController.logout);
        this.router.get('/api/jurusan/get-all',JurusanController.getAll);

        this.router.post('/api/mahasiswa/create', MahasiswaController.create);
        this.router.get('/api/mahasiswa/get-all', MahasiswaController.getAll);
        this.router.delete('/api/mahasiswa/delete', MahasiswaController.delete);
        this.router.get('/api/mahasiswa/get/:nrp', MahasiswaController.edit);
        this.router.put('/api/mahasiswa/update/:nrp', MahasiswaController.update);

        this.router.post('/api/admin/create-master',AdminController.createMaster);
        this.router.post('/api/admin/create-admin', AdminController.createAdmin);
    }
}

const appRouter = new AppRouter();

module.exports = appRouter.router; 