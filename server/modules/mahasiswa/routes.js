const express = require('express');

const MahasiswaController = require('./controller');

const routes = express.Router();
routes.post('/auth/login',MahasiswaController.login);

module.exports = routes;