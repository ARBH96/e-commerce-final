const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Ingresa el nombre del producto']
    },
    productDescription:{
        type:String,
        required:[true, 'Ingrese la descripcion del producto']
    },
    productPrice: {
        type: mongoose.Types.Decimal128,
        required: [true, 'Ingresa el precio del producto']
    },
    productStock:{
        type: Number,
        required:[true, 'Ingresa la cantidad disponible en el inventario']
    }
})

module.exports = mongoose.model('Producto', productoSchema)