const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  experience: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experience'
  }],
  article: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article'
  }],
  takeaway: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'takeaway'
  }]
})

const CartModel = mongoose.model('cart', cartSchema)
module.exports = CartModel
