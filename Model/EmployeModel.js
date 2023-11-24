const mongooss = require("mongoose");

const EmploySchema = new mongooss.Schema({
    name:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true

    },
    Department:{
        type:String,
        required:true

    },

    Adress:{
        type:String,
        required:true

    }




});

const Employe = mongooss.model("employes Data",EmploySchema);
module.exports = Employe;