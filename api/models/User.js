const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    securityQuestion1:String,
    answer1:String,
    securityQuestion2:String,
    answer2:String,
    securityQuestion3:String,
    answer3:String,
});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;