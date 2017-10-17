const express = require('express');
const  mongoose = require('mongoose');

require ('./models/User');
require ('./services/passport'); 

const key = require('./config/key');
const authRoutes = require('./routes/authRoutes');


mongoose.connect(key.mongoURI);
// console.log(mongoose.connection.readyState);
const app = express();
authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);








// http://localhost:5000
// mongoose.connect('mongodb://127.0.0.1:27017/emaily-dev');
// require ('./services/passport')(app);
