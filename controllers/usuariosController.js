const Usuario = require("../models/usuarios");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async ( req , res) => {
    //console.log(req.body);
    const {password, email} = req.body;

    try{
    // Revisar que se un unico usuario registrado
        let usuario = await Usuario.findOne({ email});

        if (usuario) {
            return res.status(404).json({ msg : "El usuario ya existe"});
        }

    // Crear el nuevo usuario
        usuario = new Usuario(req.body);
    //hash
        usuario.password = await bcryptjs.hash(password, 10);
    
    //Guardar en la base de datos    
        const usuarioAlmacenado = await usuario.save();

        res.json(usuarioAlmacenado);


    //res.json({ msg : "desde controller POST"})

    }catch(error){
        console.log(error)
    }
};

    

