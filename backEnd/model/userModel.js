const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    // id  name email phone 
    name : {
        type : String,
        required : ['User must have a name', true]
    },
    email : {
        type : String,
        required : ['User must have a email', true],
        unique : true
    },
    phone : {
        type : String,
        required : ['User must have a phone ', true]
    }
},{timestamps: true})
const userModel = mongoose.model('user', userSchema)



module.exports = mongoose.model('user',userSchema)