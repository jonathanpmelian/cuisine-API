const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: function (v) {
                return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,30})/).test(v)
            },
            message: 'Name should be between 2 and 30 characters'
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
                return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,250})/).test(v)
            },
            message: 'Description should be between 2 and 250 characters'
        }
    },
    photo: {
        type: Number
    },
    duration: {
        type: String
    },
    reservation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reservation'
    }
})

const ExperienceModel = mongoose.model('experience', experienceSchema)
module.exports = ExperienceModel