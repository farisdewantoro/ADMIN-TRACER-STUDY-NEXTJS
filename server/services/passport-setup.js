import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import moduleName from 'module'
import keys from '../config/keys';
import db from '../config/conn';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';

passport.serializeUser((user, done) => {
    let tokenValue = {
    }
    if (user.providerId) tokenValue.providerId = user.providerId;
    if (user.token) tokenValue.token = user.token;
    if (user.provider) tokenValue.provider = user.provider;
    if (user.id) tokenValue.user_id = user.id;

    if (user.email) tokenValue.email = user.email;

    done(null, tokenValue)
})
passport.deserializeUser((data, done) => {
    let querySelect = `SELECT 
    us.id,
    us.displayName,
    us.email,
    us.gender,
    up.providerId,
    up.token,
    up.provider,
    us.firstname,
    us.lastname,
    ui.birthday,
    ui.phone_number from user as us 
    left join user_provider as up on us.id = up.user_id 
    left join user_information as ui on us.id = ui.user_id
    where us.id = ? `;
    db.query(querySelect, [data.user_id], (err, ress) => {
        if (ress.length > 0) {
            done(null, ress[0])
        }

    })

})

passport.use(new LocalStrategy(
    function (email, password, done) {


        let querySelect = `SELECT 
    us.id,
    us.displayName,
    us.gender,
    us.firstname,
    us.lastname,
    ui.birthday,
    ui.phone_number,
    ua.email,
    ua.password,
    ua.email_confirm_token
    from user as us 
    left join user_account as ua on us.id = ua.user_id
    left join user_information as ui on us.id = ui.user_id
    where ua.email = ?
    `
        db.query(querySelect, [email], (err, result) => {

            if (err) return done(err, null);
            if (result.length > 0) {
                let data = result[0];
                bcrypt.compare(password, data.password)
                    .then(isMatch => {
                        if (isMatch) {
                            return done(null, data);
                        } else {
                            return done(null, false, { message: 'Incorrect password.' });
                        }

                    })

            }
            if (result.length === 0) {
                return done(null, false, { message: 'Incorrect email.' });
            }


        })

    }
));

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: keys.origin.url + '/api/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    }, (accessToken, refreshToken, profile, done) => {
          
        let queryInsert = `INSERT INTO user set is_provider = 1, ?; INSERT INTO user_provider set user_id = (SELECT u.id from user as u order by id desc limit 1), ?;`;
        let queryFind = `SELECT 
        us.id,
        us.displayName,
        us.email,
        us.gender,
        up.providerId,
        up.token,
        up.provider,
        us.firstname,
        us.lastname,
        ui.birthday,
        ui.phone_number
        from user as us 
        left join user_provider as up on us.id = up.user_id 
        left join user_information as ui on us.id = ui.user_id
        where up.providerId = '${profile.id}' and up.provider = '${profile.provider}' and us.is_provider = 1`;

        let querySelect = `SELECT 
    us.id,
    us.displayName,
    us.email,
    us.gender,
    up.providerId,
    up.token,
    up.provider,
    us.firstname,
    us.lastname,
    ui.birthday,
    ui.phone_number from user as us 
    left join user_provider as up on us.id = up.user_id 
    left join user_information as ui on us.id = ui.user_id
    where us.id = ? and up.provider = ? and up.providerId = ? and up.token = ? and us.is_provider = 1`;
        let user = {
            email: profile.emails[0].value,
        }
        if (profile.gender) user.gender = profile.gender;
        if (profile.displayName) user.displayName = profile.displayName;
        if (Object.keys(profile.name).length > 0) {
            if (profile.name.familyName) user.lastname = profile.name.familyName;
            if (profile.name.givenName) user.firstname = profile.name.givenName;
        }

        let user_provider = {
            provider: profile.provider,
            providerId: profile.id,
            token: accessToken
        }
        db.query(queryFind, (error, result) => {
         
            if (error) return done(error);
            if (result.length > 0) {
                return done(null, result[0]);
            } else {

                db.query(queryInsert, [user, user_provider], (err, ress, fields) => {
                    if (err) return done(err);
                    if (ress) {
                        db.query(querySelect, [ress[0].insertId, profile.provider, profile.id, accessToken], (err, ress) => {
                            if (err) return done(err);
                            if (ress.length > 0) {
                                return done(null, ress[0]);
                            }

                        })
                    }
                })
            }
        })







    })

);



passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: keys.origin.url + '/api/auth/facebook/redirect',
    profileFields: ['id', 'emails', 'name', 'birthday', 'location', 'gender', 'age_range', 'link', 'hometown']

}, (accessToken, refreshToken, profile, done) => {
    let payload = profile._json;
    let user = {
        email: payload.email
    }

    if (payload.gender) user.gender = payload.gender;
    if (payload.displayName) user.displayName = payload.displayName;
    if (payload.last_name) user.lastname = payload.last_name;
    if (payload.first_name) user.firstname = payload.first_name;

    let user_information = {};
    if (payload.birthday) user_information.birthday = payload.birthday;
    if (typeof payload.location !== "undefined" && typeof payload.location.name !== "undefined") {
        user_information.location = payload.location.name;

    }
    if (typeof payload.age_range !== "undefined" && typeof payload.age_rang.min !== "undefined") {
        user_information.age = payload.age_range.min;
    }

    let user_provider = {
        provider: profile.provider,
        providerId: payload.id,
        token: accessToken
    }
    let queryInsert = `INSERT INTO user set is_provider = 1, ?; INSERT INTO user_provider set user_id = (SELECT u.id from user as u order by id desc limit 1), ?;
                       ${Object.keys(user_information).length > 0 ? `INSERT INTO user_information set user_id = (SELECT u.id from user as u order by id desc limit 1), ? ` : ''}`;
    let queryFind = `SELECT 
        us.id,
        us.displayName,
        us.email,
        us.gender,
        up.providerId,
        up.token,
        up.provider,
        us.firstname,
        us.lastname,
        ui.birthday,
        ui.phone_number
        from user as us 
        left join user_provider as up on us.id = up.user_id 
        left join user_information as ui on us.id = ui.user_id
        where up.providerId = '${profile.id}' and up.provider = '${profile.provider}' and us.is_provider = 1`;

    let querySelect = `SELECT 
    us.id,
    us.displayName,
    us.email,
    us.gender,
    up.providerId,
    up.token,
    up.provider,
    us.firstname,
    us.lastname,
    ui.birthday,
    ui.phone_number from user as us 
    left join user_provider as up on us.id = up.user_id 
    left join user_information as ui on us.id = ui.user_id
    where us.id = ? and up.provider = ? and up.providerId = ? and up.token = ? and us.is_provider = 1`;

    db.query(queryFind, (error, result) => {
        if (error) return done(error);
        if (result.length > 0) {
            return done(null, result[0]);
        } else {

            db.query(queryInsert, [user, user_provider, user_information], (err, ress, fields) => {
                if (err) return done(err);
                if (ress) {
                    db.query(querySelect, [ress[0].insertId, profile.provider, profile.id, accessToken], (err, ress) => {
                        if (err) return done(err);
                        if (ress.length > 0) {
                            return done(null, ress[0]);
                        }

                    })
                }
            })
        }
    })







})

);
