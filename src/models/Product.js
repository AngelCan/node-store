const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    //Cuando se envie un objeto de tipo productSchema agrega la fecha y hora en la que fue creado o modificado
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)