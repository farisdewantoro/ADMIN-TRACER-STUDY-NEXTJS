const routes = require('next-routes')

module.exports = routes()
    .add('home','/','index')
    .add('login')
    .add('tes','/login/tes','dashboard')
    .add('identitas', '/identitas', 'identitas');