

const mangoos = require("mongoose")
const ProductSchema = new mangoos.Schema({
    productname:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    }


})
const Product = mangoos.model('Product', ProductSchema);
module.exports = Product