const express = require('express')
const {registrarUser, loginUser, dataUser} = require('../controllers/usersControllers')
const router = express.Router()

router.post('/registrar', registrarUser)
router.post('/login', loginUser)
router.get('/data', dataUser)

module.exports = router