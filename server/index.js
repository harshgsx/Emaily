const express = require('express');
const app = express();
app.get('/',(req,res) =>
{
	res.send({hi:'harsh'});
});
app.listen(5000);


// http://localhost:5000/