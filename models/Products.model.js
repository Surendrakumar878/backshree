const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);
let productsSchema = new mongoose.Schema({
    brand:String,
    quantity:String,
    name:String,
    weight:String,
    price:String,
    isvailable:String,
    mrp:String,
    category:String,
    ImgSrc:String
 
});

const products =mongoose.model("products",productsSchema);
module.exports = products;


