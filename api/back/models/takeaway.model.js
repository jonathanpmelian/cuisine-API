const mongoose = require('mongoose')

const takeawaySchema = new mongoose.Schema({
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
        type: String,
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
        type: String
    },
    cookingTime: {
        type: Number
    },
    type: {
        type: String
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant'
    }
})

const TakeawayModel = mongoose.model('takeaway', takeawaySchema)
module.exports = TakeawayModel