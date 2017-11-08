const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //###conventional approach 

const userSchema = new Schema ({
googleId: String,
credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
