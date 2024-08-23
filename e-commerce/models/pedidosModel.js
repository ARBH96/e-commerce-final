const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    producto: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    total:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema)