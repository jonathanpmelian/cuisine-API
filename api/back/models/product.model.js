const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  stock: {
    type: Number
  },
  category: {
    type: String,
    required: true,
    enum: ['article', 'food', 'experience']
  },
  supplier: {
    type: String
  },
  kind: {
    type: String
  }
})

const ShopModel = mongoose.model('shop', shopSchema)
module.exports = ShopModel
