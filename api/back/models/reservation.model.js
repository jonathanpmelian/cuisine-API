const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    day: {
        type: Number,
        require: [true, 'Day is required']
    },
    hour: {
        type: String,
        require: [true, 'Hour is required']
    },
    month: {
        type: String,
        require: [true, 'Month is required']
    },
    year: {
        type: Number,
        require: [true, 'Month is required']
    },
    dayOfTheWeek: {
        type: String,
        enum: {values: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"], 
        message: "Sunday we are closed"},
        require: [true, "dayOfTheWeek is required"]
    }, 
     people: {
        type: Number,
        require: [true, 'People is required']
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
        require: [true, "Restaurant is required"]
    },
    validUntil: {
        type: Date,
        default: () => Date.now() +  60 * 60 * 1000 // 1 hours from now
    }
})

const ReservationModel = mongoose.model('reservation', reservationSchema)
module.exports = ReservationModel