const express = require ('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/pedidos', require('./routes/pedidosRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/productos', require('./routes/productosRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))

