const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require ('./models/User');
require ('./services/passport'); 


const authRoutes = require('./routes/authRoutes');


mongoose.connect(keys.mongoURI);
// console.log(mongoose.connection.readyState);


const app = express();
app.use(

        cookieSession({
        	
        	maxAge: 30 * 24 * 60 * 60 * 1000,
        	keys: [keys.cookieKey]
    		})
    );

app.use(passport.initialize());
app.use(passport.session());


authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// http://localhost:5000
// mongoose.connect('mongodb://127.0.0.1:27017/emaily-dev');
// require ('./services/passport')(app);
