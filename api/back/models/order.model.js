const mongoose = require('mongoose')
const addressSchema = require('./address.model')

const orderSchema = new mongoose.Schema({
  status: {
    type: String
  },
  date: {
    type: Date,
    require: [true, 'Date is required']
  },
  deliveryDay: {
    type: Date,
    require: [true, 'DeliveryDay is required']
  },
  deliveryHour: {
    type: Date,
    require: [true, 'DeliveryHour is required']
  },
  email: {
    type: String,
    require: [true, 'Name is required']
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart',
    require: [true, 'Cart is required']
  },
  adress: addressSchema
})

const OrderModel = mongoose.model('order', orderSchema)
module.exports = OrderModel
