const mongoose = require('mongoose')
const addressSchema = require('./address.model')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,13})/).test(v)
      },
      message: 'Name should be between 2 and 13 characters. First letter uppercase.'
    }
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,13})/).test(v)
      },
      message: 'Surname should be between 2 and 13 characters. First letter uppercase.'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    validate: {
      validator: function (v) {
        return (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(v)
      },
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required']
    // validate: {
    //   validator: function (v) {
    //     return (/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/).test(v)
    //   },
    //   message: 'Password must be 8 characters and include at least 1 digit'
    // }
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return (/^[+]{1}[(]{1}[0-9]{2}[)]{1}[0-9]{3,4}[0-9]{6}$/).test(v)
      },
      message: 'Invalid user phone number'
    }
  },
  role: {
    type: String,
    enum: {
      values: ['Client', 'Admin'],
      message: '{VALUE} is not supported'
    },
    default: 'Client'
  },
  address: [addressSchema],
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart'
  },
  order: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order'
  }],
  reservation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation'
  }]
})

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel
