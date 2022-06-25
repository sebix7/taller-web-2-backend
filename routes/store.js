/*const { Router } = require("express");
const Store = require("../models/Store");
const router = Router();

router.get("/", (req, res) => {
  res.json(Store.obtenerProductos());
});

module.exports = router;

*/

const { Router } = require("express");
const {
	getProductos,
	getProducto,
} = require("../repository/snacksRepository");
const router = Router();

router.get("/", async (req, res) => {
	const listaProductos = await getProductos();
	return res.status(200).json({ productos: listaProductos });
});

router.get("/:id", async (req, res) => {
	let id = parseInt(req.params.id);
	const producto = await getProducto(id);
	if (!pelicula) {
		return res
			.status(404)
			.json({ error: true, mensaje: "No existe ese producto " + id });
	}
	return res.json(producto);
});

module.exports = router;
