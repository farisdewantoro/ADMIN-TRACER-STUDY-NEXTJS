const Router = require('express').Router;
const {
    JurusanController,
    MahasiswaController,
    AuthController
} = require('../controllers');
class AppRouter{
    constructor(){
        this.router = Router();
        this.buildRoutes();
    }
    buildRoutes(){
        this.router.post("/api/auth/login",AuthController.signin);
        this.router.post('/api/mahasiswa/create',MahasiswaController.create);
        this.router.get('/api/jurusan/get-all',JurusanController.getAll);
    }
}

const appRouter = new AppRouter();

module.exports = appRouter.router; 