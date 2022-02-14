const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, 'Day is required']
  },
  hour: {
    type: String,
    required: [true, 'Hour is required'],
    enum: {
      values: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],
      message: 'Invalid hour. Please try: 18:00, 18:30, 19:00, 19:30, 20:00, 20:30, 21:00, 21:30'
    }
  },
  month: {
    type: String,
    required: [true, 'Month is required'],
    min: 1,
    max: 12
  },
  year: {
    type: Number,
    required: [true, 'Year is required']
  },
  dayOfTheWeek: {
    type: String,
    enum: {
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
      message: 'We close on Sunday'
    },
    required: [true, 'dayOfTheWeek is required']
  },
  people: {
    type: Number,
    required: [true, 'People is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    validate: {
      validator: function (v) {
        return (/^[+]{1}[(]{1}[0-9]{2}[)]{1}[0-9]{3,4}[0-9]{6}$/).test(v)
      },
      message: 'Invalid user phone number'
    }
  },
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
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
    required: [true, 'Restaurant is required']
  },
  validUntil: {
    type: Date,
    default: () => Date.now() + 60 * 60 * 1000 // 1 hour after reservation
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experience'
  }
})

const ReservationModel = mongoose.model('reservation', reservationSchema)
module.exports = ReservationModel
