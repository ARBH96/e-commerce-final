const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Ingresa el nombre del producto'],
        ref: 'User'
    },
    producto: {
        type: Schema.Types.ObjectId,
        required:[true, 'Ingresa la descripcion del producto'],
        ref: 'Product'
    },
    productPrice:{
        type:mongoose.Types.Decimal128,
        required:[true, 'Ingresa el precio del producto']
    },
    cantidad:{
        type: Number,
        required: [true, 'Cantidad del producto a comprar']
    },
    total:{
        type: mongoose.Types.Decimal128,
        required: [true, 'Es necesario dar el total del pedido']
    }
})

module.exports = mongoose.model('Pedido', pedidoSchema)