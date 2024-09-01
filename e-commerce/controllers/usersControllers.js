const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const modelUser = require('../models/usersModel')

const registrarUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Faltan datos"
        })
        
    }

    //verificar si el usuario existe
    const existeUsuario = await modelUser.findOne({ email })

    if (existeUsuario) {
        res.status(400)
        throw new Error("Ese usuario ya existe")
    } else {

        //Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Crear el usuario
        const user = await modelUser.create({
            name,
            email,
            password: hashedPassword
        })

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email
            })
        } else {
            res.status(400)
            throw new Error('No se pudieron guardar los datos')
        }
    }
})

const loginUser = asyncHandler(async (req, res) => {
})

const dataUser = asyncHandler(async(req, res)=>{
    const usuarios = await modelUser.find()
    res.status(200).json(usuarios)
})
module.exports ={
    registrarUser,
    loginUser,
    dataUser
}