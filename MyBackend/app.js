const mongoose = require('mongoose');
const app = require('./cart');
const CartItem = require('./models/CartItem');


async function main() {
    await mongoose.connect('mongodb+srv://cart_api:EznMe3dwMW0JSbOE@mernapp.aftjpau.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp');
    app.listen(3000, () => {
        console.log('APIs running') 
    });
   
}  

main().then(() => {
    console.log('db connected')
});