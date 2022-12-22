const express = require("express")
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");

router.post(
    "/",
    usuarioController.crearUsuario
);

//definir las rutas
module.exports = router;





/*
**********************************************************************************************************
Lineas de prueba de los verbos HTTP, se utilizaron de pruebas, se comentarean para dejarlas de referencia
**********************************************************************************************************
router.get("/", (req, res) => {
    res.json({msg:"desde router get"});

});

router.post("/", (req, res) => {
    res.json({msg:"desde router POST json hacia postman"});

});

router.put("/", (req, res) => {
    res.json({msg:"desde router PUT es para actualizar json postman"});

});

router.delete("/", (req, res) => {
    res.json({msg:"desde router DELETE es para borrar json postman"});

});
*/


