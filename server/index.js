const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


const keys = require('./config/keys');

require ('./models/User');
require('./models/Survey');
require ('./services/passport'); 


const authRoutes = require('./routes/authRoutes');


mongoose.connect(keys.mongoURI);
// console.log(mongoose.connection.readyState);


const app = express();
//body parser is express middelware so it must be wired here
app.use(bodyParser.json());

app.use(

        cookieSession({
        	
        	maxAge: 30 * 24 * 60 * 60 * 1000,
        	keys: [keys.cookieKey]
    		})
    );

app.use(passport.initialize());
app.use(passport.session());


// authRoutes(app);
require ('./routes/authRoutes')(app);
require('./routes/billingRouts')(app);
require('./routes/surveyRoute')(app);	

const PORT = process.env.PORT || 80;
app.listen(PORT);

 mongoose.connect('mongodb://127.0.0.1:27017/emaily-dev');
// require ('./services/passport')(app);
