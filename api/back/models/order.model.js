const mongoose = require('mongoose')
const addressSchema = require('./address.model')

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    default: 'Preparing',
    enum: ['Preparing', 'Sending', 'Delivered']
  },
  dateNow: {
    type: Date,
    default: () => Date.now()
  },
  deliveryDay: {
    type: Number
  },
  deliveryHour: {
    type: Number
  },
  email: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: function (v) {
        return (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(v)
      },
      message: 'Invalid email format'
    }
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart',
    required: [true, 'Cart is required']
  },
  address: {
    type: addressSchema,
    required: true
  }
})

const OrderModel = mongoose.model('order', orderSchema)
module.exports = OrderModel