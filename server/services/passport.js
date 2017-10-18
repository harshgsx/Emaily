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
async (accessToken, refereshToken, profile, done )=> {
// console.log('access token',accessToken);
// console.log('refresh token', refereshToken);
// console.log('profile', profile); 
const existingUser = await User.findOne({ googleId: profile.id }) //new async approach
 // .then((existingUser) => { // promise approach 
			if (existingUser){
				//record exist
				// console.log('user exist');
				// console.print(googleId);
				return done(null,existingUser);
				}
			
				//make a new record
				const user = await new User ({ googleId: profile.id }).save()
				done(null, user);
				// .then(user => done(null,user));
				// console.log('user added');
				// console.print(googleId);
			
		
	})
);

passport.serializeUser((user, done) => {
done(null, user.id);
// console.log('user serialization done');
});

passport.deserializeUser((id, done) => {
User.findById(id)
.then( user => {
	done(null, user);
	// console.log('deserializeUser');
});
});