const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');
const uuidv4 = require('uuid').v4;
const path = require('path');
// const RouteAPI = require('./modules');
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const nextApp = next({ dev, dir: "./app" });
const { parse } = require('url');
// const handle = nextApp.getRequestHandler()

const getRoutes = require('./routes');
// const routes = getRoutes();
const handler = getRoutes.getRequestHandler(nextApp);
const AppRouter = require('./routes/AppRouter');
const passportSetup = require('./services/passport-setup');
nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(session({
        genid: function (req) {
            return uuidv4() // use UUIDs for session IDs
        },
        name: keys.session.name,
        secret: keys.session.secret,
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: keys.session.maxAge, // satu hari,
            sameSite: true,
        }

    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cookieParser());

    app.disable('x-powered-by');

    app.use(cors({ origin: keys.origin.url, credentials: true }))



    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header('X-XSS-Protection', '1; mode=block');
        res.header('X-Frame-Options', 'deny');
        res.header('X-Content-Type-Options', 'nosniff');
        res.header("Access-Control-Allow-Origin", keys.origin.url);
        next();
    })


    // app.use('/api/', [
    //     RouteAPI.MahasiswaRoutes
    // ]);

    app.use(AppRouter);

    app.use(handler);
    // app.get('*', (req, res) => {
    //     const parsedUrl = parse(req.url,true);
    //     const {pathname, query = {} } = parsedUrl;
    //     const route = routes[pathname];

    //     /**
    //      * Pull in front end routes and check request against those routes
    //      *
    //      */
    //     // if(route){
    //     //     return app.render(req,res,route.page,query);
    //     // }
    //      handle(req, res) // for all the react stuff
    // });

    app.listen(PORT, err => {
        if (err) throw err;

        console.log(`ready at http://localhost:${PORT}`)
    });
})





// Server static assets if in production
