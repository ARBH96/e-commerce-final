const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Ingresa el nombre del producto']
    },
    Description:{
        type:String,
        required:[true, 'Ingrese la descripcion del producto']
    },
    Price: {
        type: mongoose.Types.Decimal128,
        required: [true, 'Ingresa el precio del producto']
    },
    Stock:{
        type: Number,
        required:[true, 'Ingresa la cantidad disponible en el inventario']
    }
})

module.exports = mongoose.model('Producto', productoSchema)