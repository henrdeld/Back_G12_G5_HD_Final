const Productos = require("../models/Productos");

exports.obtenerProductosHome = async ( req, res) => {
    try {
        //res.status(404).json({ msg : "obtener categoria"});
        const productos = await Productos.find();

        res.json({ productos });
    } catch (error) {
        console.log(error);

    }

};

exports.obtenerProductos = async ( req, res) => {
    const { id } = req.params
    const producto = await Productos.find().where("categoriaId").equals(id);
    res.json(producto);

};

exports.crearProductos = async ( req, res) => {
    try{
        const producto = new Productos(req.body);
        producto.save();
        res.json(producto);

    }catch(error){
        console.log(error);

    }

};


exports.actualizarProductos = async ( req, res) => {
    res.status(404).json({ msg : "actualizar producto"});

};

exports.borrarProductos = async ( req, res) => {
    res.status(404).json({ msg : "borrar producto"});

};