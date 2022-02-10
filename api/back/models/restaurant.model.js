const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String
  },
  direction: {
    type: String
  },
  phone: {
    type: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  menu: {
    type: String
  }
})

const RestaurantModel = mongoose.model('restaurant', restaurantSchema)
module.exports = RestaurantModel
