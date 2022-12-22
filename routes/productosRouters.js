const express = require("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd");
const productosController = require("../Controllers/productosController");

router.get("/", productosController.obtenerProductosHome );
router.get("/:id", authMidd, productosController.obtenerProductos );
router.post("/", authMidd, productosController.crearProductos );
router.put("/:id", authMidd, productosController.actualizarProductos );
router.delete("/:id", authMidd, productosController.borrarProductos )

//definir las rutas
module.exports = router;