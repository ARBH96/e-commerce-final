const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Producto', productoSchema)