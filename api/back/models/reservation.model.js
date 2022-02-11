const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    day: {
        type: String,
        require: [true, 'Day is required']
    },
    hour: {
        type: Number,
        require: [true, 'Hour is required']
    },
    month: {
        type: Number,
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
        ref: 'restaurant'
    }
})

const ReservationModel = mongoose.model('reservation', reservationSchema)
module.exports = ReservationModel