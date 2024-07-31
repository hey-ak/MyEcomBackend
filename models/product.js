const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    quantity:Number,
    images: [String],
    categoryId: mongoose.Schema.Types.ObjectId

})

const Product = mongoose.model("Product",productSchema);
module.exports = Product

