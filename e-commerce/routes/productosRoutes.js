const express = require('express')
const router = express.Router()
const { createProductos, getProductos} = require('../controllers/productosControllers')
const authMiddleware = require('../middleware/authMiddleware')

//router.route('/').get(getPedidos).post(createPedidos)
router.get('/productos', authMiddleware, getProductos)
router.post('/productos', authMiddleware, createProductos)

//router.route('/:id').delete(protect, deletePedidos).put(protect, updatePedidos)
//router.put('/:id', protect, updateProductos)
//router.delete('/:id', protect, deleteProductos)

module.exports = router