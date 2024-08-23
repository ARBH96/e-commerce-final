const asyncHandler = require('express-async-handler')
const Producto = require('../models/productosModel')

exports.createProductos = async (req, res) =>{
    const {name, price} = req.body;
    try{
        const producto = new Producto({name, price});
        await producto.save();
        res.status(201).json(producto);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getProductos = async (req, res) =>{
    try{
        const productos = await Producto.find();
        res.json(productos);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};