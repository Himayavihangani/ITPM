const mongoose = require('mongoose');
const CartItemSchema = new mongoose.Schema({
    name: String,
    imageUrl:String,
    title: String,
    description: String,
    quantity: Number,
    price: Number

});
const CartItem = mongoose.model('CartItem', CartItemSchema);
module.exports = CartItem;