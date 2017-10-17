const express = require('express');
const  mongoose = require('mongoose');
require ('./services/passport'); 
const keys = ('./config/key.js');
const authRoutes = require('./routes/authRoutes');



const app = express(keys.mongoURI);


authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000
// mongoose.connect('mongodb://127.0.0.1:27017/emaily-dev');
// require ('./services/passport')(app);
