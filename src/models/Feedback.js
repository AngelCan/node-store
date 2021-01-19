const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = Schema({
    completeName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    store: {type: String, required: true},
    message: {type: String, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Feedbacks', feedbackSchema)