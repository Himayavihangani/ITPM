// importing express library
const express = require("express");
// Initialize express API
const app = express();
const cors = require('cors');
const CartItem = require("./models/CartItem");


const cardData = [
    {
        id: 1,
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/021/952/564/original/free-tasty-hamburger-on-transparent-background-free-png.png',
        title: 'Cheese burger',
        description: 'regular burger with cheese',
        price: 'RS 940.00'
    },
    {
        id: 2,
        imageUrl: 'https://www.saltandlavender.com/wp-content/uploads/2020/10/creamy-tomato-pasta-1.jpg',
        title: 'Creamy pasta',
        description: 'penne pasta',
        price: 'RS 1300.00'
    },
    {
        id: 3,
        imageUrl: 'https://houseofnasheats.com/wp-content/uploads/2023/10/FB-Chocolate-Milkshake-1.jpg',
        title: 'Chocolate Milkshake',
        description: 'Choc malt milkshake',
        price: 'RS 890.00'
    },
    {
        id: 4,
        imageUrl: 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
        title: 'French fries',
        description: 'Salty french fries with ketchup',
        price: 'RS 590.00'
    },
];

app.use(cors());
app.use(express.json());

//defining items API endpoint
// req=request from UI to API
// res=response from API to UI
//API to get items
app.get("/items" , async (req, res) => {
    // res.send("you'll get the item soon"); 
   const cartItems = await CartItem.find();
   
    res.json(cartItems);
});
app.post("/items" , async (req, res) => {
   const newItem = await CartItem.create({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    });
   res.json(newItem);

});
app.delete("/items/:itemId" , async (req, res) => {
    const itemId = req.params.itemId;
    await CartItem.findByIdAndDelete(itemId);
    
    res.sendStatus(204);
});

app.patch("/items/:itemId" , async (req, res) => {
   const itemId = req.params.itemId;
   
   const updatedCartItem = await CartItem.findByIdAndUpdate(itemId, {quantity:req.body.quantity}, {new: true});
   res.json(updatedCartItem);
});

module.exports = app; 

