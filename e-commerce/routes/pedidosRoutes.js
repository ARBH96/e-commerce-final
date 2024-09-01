const express = require('express')
const { getPedidos, createPedidos, updatePedidos, deletePedidos} = require('../controllers/pedidosControllers')
const router = express.Router()
//const {protect} = require('../middleware/authMiddleware')

//router.route('/').get(getPedidos)
router.route('/').get(getPedidos).post(createPedidos)

//router.route('/:id').delete(protect, deletePedidos).put(protect, updatePedidos)
router.route('/:id').put(updatePedidos).delete(deletePedidos)

module.exports = router