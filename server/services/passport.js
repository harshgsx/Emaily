const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); 
mongoose.Promise = require('bluebird');
const keys = require('../config/keys');
const User = mongoose.model('users'); 



passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
},
(accessToken, refereshToken, profile, done )=> {
// console.log('access token',accessToken);
// console.log('refresh token', refereshToken);
// console.log('profile', profile); 
User.findOne({ googleId: profile.id }).then((existingUser) => { // promise approach 
			if (existingUser){
				//record exist
				// console.log('user exist');
				// console.print(googleId);
				done(null,existingUser);
				}
			else{
				//make a new record
				new User ({ googleId: profile.id }).save().then(user => done(null,user));
				// console.log('user added');
				// console.print(googleId);
				}
		});
	})
);

passport.serializeUser((user, done) => {
done(null, user.id);
console.log('user serialization done');
});

passport.deserializeUser((id, done) => {
User.findById(id)
.then( user => {
	done(null, user);
	console.log('deserializeUser');
});

});