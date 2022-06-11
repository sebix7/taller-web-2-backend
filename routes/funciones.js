const { Router } = require("express");
const Lista = require("../models/ListaDeFunciones");
const router = Router();

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.json(Lista.obtenerPorID(id));
});

module.exports = router;
