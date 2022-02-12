const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  day: {
    type: Number,
    require: [true, 'Day is required']
  },
  hour: {
    type: String,
    require: [true, 'Hour is required'],
    enum: {
      values:['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],
      message: 'Invalid hour. Please try: 18:00, 18:30, 19:00, 19:30, 20:00, 20:30, 21:00, 21:30'
    }
  },
  month: {
    type: String,
    require: [true, 'Month is required'],
    min: 1,
    max: 12
  },
  year: {
    type: Number,
    require: [true, 'Year is required']
  },
  dayOfTheWeek: {
    type: String,
    enum: {
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
      message: 'We close on Sunday'
    },
    require: [true, 'dayOfTheWeek is required']
  },
  people: {
    type: Number,
    require: [true, 'People is required'],
  },
  phone: {
    type: String,
    require: [true, 'Phone is required']
  },
  name: {
    type: String,
    require: [true, 'Name is required']
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
    require: [true, 'Restaurant is required']
  },
  validUntil: {
    type: Date,
    default: () => Date.now() + 60 * 60 * 1000 // 1 hour after reservation
  }
})

const ReservationModel = mongoose.model('reservation', reservationSchema)
module.exports = ReservationModel
