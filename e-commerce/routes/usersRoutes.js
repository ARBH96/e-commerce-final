const express = require('express')
const {registrarUser, loginUser, dataUser} = require('../controllers/usersControllers')
const router = express.Router()

router.post('/registrar', registrarUser)
router.post('/login', loginUser)
router.get('/data', protect, dataUser)

module.exports = router