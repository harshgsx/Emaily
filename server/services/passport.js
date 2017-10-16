const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path');
const fs = require('fs');
var keys = require('../config/key');
 
 passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
},
(accessToken, refereshToken, profile, done )=> {
console.log('access token',accessToken);
console.log('refersh token', refereshToken);
console.log('profile', profile); 
})
);
 