const mongoose = require('mongoose')
const addressSchema = require('./address.model')

const orderSchema = new mongoose.Schema({
    status: {
        type: String,
    },
    date: {
        type: Date,
        require: [True, 'Date is required']
    },
    deliveryDay: {
        type: Date,
        require: [True, 'DeliveryDay is required']
    },
    deliveryHour: {
        type: Date,
        require: [True, 'DeliveryHour is required']
    },
    name: {
        type: String,
       require: [True, 'Name is required']
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        require: [true, 'Cart is required']
    },
    adress: [addressSchema],
})

module.exports = orderSchema
