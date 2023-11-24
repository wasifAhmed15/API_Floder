const mongoose = require("mongoose")
const AuthSchema = mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }


})

const AuthModel = mongoose.model("User",AuthSchema);
module.exports=AuthModel
