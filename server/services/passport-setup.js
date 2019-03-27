const passport = require('passport'),
      LocalStrategy=require('passport-local').Strategy;
const db = require('../config/conn');
const keys = require('../config/keys');
const bcrypt = require('bcryptjs');
const {AdminModel} = require('../models');
const jwt = require('jsonwebtoken');
passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((data, done) => {
    let querySelect = new AdminModel().SelectAdmin;
    db.query(querySelect, [data.username], (err, ress) => {
        if (ress.length > 0) {
            let d = ress[0];
            let hak_akses = jwt.verify(d.hak_akses, keys.jwt.secretOrPrivateKey);
            d.hak_akses = hak_akses.hak_akses;
            done(null,d );
        }

    })

})

passport.use(new LocalStrategy(
    function (username, password, done) {

 
        let querySelect = new AdminModel().SelectAdmin;

        db.query(querySelect, [username], (err, result) => {

            if (err) return done(err, null);
            if (result.length > 0) {
                let data = result[0];
                let hak_akses = jwt.verify(data.hak_akses,keys.jwt.secretOrPrivateKey);
                data.hak_akses = hak_akses.hak_akses;
              
                bcrypt.compare(password, data.password, function (err, result) {
                    if (err) return done(err, null);
                    if (result) {
                        return done(null, data);
                    }
                });
                // bcrypt.compare(password, data.password)
                //     .then(isMatch => {
                     
                //         if (isMatch) {
                //             return done(null, data);
                //         } else {
                //             return done(null, false, { message: 'Username atau password salah' });
                //         }

                //     })

            }
            if (result.length === 0) {
                return done(null, false, { message: 'Username atau password salah' });
            }


        })

    }
));




