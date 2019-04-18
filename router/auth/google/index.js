/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();

const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth20' ).Strategy

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GoogleStrategy({
        clientID: '227013543468-u9vrh2oegh5hne5e6b5cpsp37k7ba6dr.apps.googleusercontent.com',
        clientSecret: 'UCbLcEy4ymK1ZDK2bpn9OcHe',
        callbackURL: 'http://localhost:5000/auth/google/callback'
    }, function(accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
            user = profile;
            return done(null, user);
        });
    }
));

router.get('/', passport.authenticate('google', { scope:
    ['profile']}));

router.get('/callback', passport.authenticate( 'google', { failureRedirect: '/auth/fail' }),
    function(req, res) {
            res.redirect('/auth/success'); 
});

//router.use('/main', main);

module.exports = router;