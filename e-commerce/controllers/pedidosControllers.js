const asyncHandler = require('express-async-handler')
const Pedido = require('../models/pedidosModel')

const getPedidos = asyncHandler(async (req, res) => {
    const pedidos = await Pedido.find({ user: req.user.id })
    res.status(200).json(pedidos)
})

const createPedidos = asyncHandler(async (req, res) => {

    if (!req.body.texto) {
        res.status(400)
        throw new Error("Favor de teclear una descripcion")
    }

    const pedido = await Pedido.create({
        texto: req.body.texto,
        user: req.user.id
    })

    res.status(201).json(pedido)

})

const updatePedidos = asyncHandler(async (req, res) => {

    //verificamos que la tarea exista
    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('Tarea no encontrada')
    }

    //verificamos que la tarea pertenece al usuario logeado
    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Usuario no autorizado')
    } else {
        const pedidoUpdated = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(pedidoUpdated)
    }
})

const deletePedidos = asyncHandler(async (req, res) => {

    //verificamos que el pedido existe
    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('Pedido no encontrado')
    }

    //verificamos que el pedido pertenece al usuario logeado
    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Usuario no autorizado')
    } else {
        await pedido.deleteOne()
        res.status(200).json({ id: req.params.id })
    }
})

module.exports = {
    getPedidos,
    createPedidos,
    updatePedidos,
    deletePedidos
}