const { Router } = require("express");
const Lista = require("../models/ListaDePeliculas");
const router = Router();

router.get("/", (req, res) => {
  res.json(Lista.Peliculas);
});

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.json(Lista.obtenerPorID(id));
});

module.exports = router;
