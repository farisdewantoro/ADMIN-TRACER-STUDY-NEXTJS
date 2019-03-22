const Router = require('express').Router;
const AuthController = require('../controllers/AuthController');
class AppRouter{
    constructor(){
        this.router = Router();
        this.buildRoutes();
    }
    buildRoutes(){
        this.router.post("/api/auth/login",AuthController.signin);
    }
}

const appRouter = new AppRouter();

module.exports = appRouter.router; 