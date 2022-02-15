const mongoose = require('mongoose')

const takeawaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,30})/).test(v)
      },
      message: 'Name should be between 2 and 30 characters. First letter uppercase.'
    }
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  description: {
    type: String,
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,13})/).test(v)
      },
      message: 'Description should be between 2 and 250 characters. First letter uppercase.'
    }
  },
  photo: {
    type: String
  },
  cookingTime: {
    type: Number,
    required: [true, 'Cooking time is required']
  },
  type: {
    type: String,
    enum: {
      values: ['Starters', 'Main', 'Desserts', 'Drinks'],
      message: 'Wrong type of Takeaway'
    },
    required: [true, 'Type of take away is required']
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
    required: [true, 'Restaurant is required']
  }
})

const TakeawayModel = mongoose.model('takeaway', takeawaySchema)
module.exports = TakeawayModel
