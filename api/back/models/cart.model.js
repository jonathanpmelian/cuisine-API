const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'article'
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'experience'
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'takeaway'
        }
    ]
})

const CartModel = mongoose.model('cart', cartSchema)
module.exports = CartModel

  