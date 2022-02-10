const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    enum: ['Client', 'Admin'],
    default: 'Client'
  }
})

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel
