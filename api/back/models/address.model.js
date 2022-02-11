const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: [true, 'Street is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{1,85})/).test(v)
      },
      message: 'Invalid street name'
    }
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    validate: {
      validator: function (v) {
        return (/^[+]{1}[(]{1}[0-9]{2}[)]{1}[0-9]{3,4}[0-9]{6}$/).test(v)
      },
      message: 'Invalid phone number'
    }
  },
  zip: {
    type: Number,
    required: [true, 'Zip code is required'],
    validate: {
      validator: function (v) {
        return (/\d{5}(?:[- ]?\d{4})?/).test(v)
      },
      message: 'Invalid zip code'
    }
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{1,85})/).test(v)
      },
      message: 'Invalid city name'
    }
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,13})/).test(v)
      },
      message: 'Name should be between 2 and 13 characters'
    }
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,13})/).test(v)
      },
      message: 'Surname should be between 2 and 13 characters'
    }
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{4,56})/).test(v)
      },
      message: 'Invalid country name'
    }
  },
  province: {
    type: String,
    validate: {
      validator: function (v) {
        return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{1,85})/).test(v)
      },
      message: 'Invalid province name'
    }
  }
})

module.exports = addressSchema
