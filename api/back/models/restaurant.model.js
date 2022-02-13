const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,30})/).test(v)
      },
      message: 'Name should be between 2 and 30 characters. First letter uppercase.'
    }
  },
  direction: {
    type: String,
    required: [true, 'Direction is required']
  },
  phone: {
    type: String,
    require: [true, 'Phone is required'],
    validate: {
      validator: function (v) {
        return (/^[+]{1}[(]{1}[0-9]{2}[)]{1}[0-9]{3,4}[0-9]{6}$/).test(v)
      },
      message: 'Invalid phone number'
    }
  },
  description: {
    type: String,
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,250})/).test(v)
      },
      message: 'Description should be between 2 and 250 characters. First letter uppercase.'
    }
  },
  photo: {
    type: String
  },
  menu: {
    type: String
  },
  reservation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation'
  }],
  hourCapacity: {
    type: Number,
    require: [true, 'Capaticy is required']
  },
  totalCapacity: {
    type: Number
  }
})

const RestaurantModel = mongoose.model('restaurant', restaurantSchema)
module.exports = RestaurantModel
