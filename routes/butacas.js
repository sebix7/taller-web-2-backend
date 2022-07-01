const { Router } = require("express");
const Butacas = require("../models/Butacas");
const { getButacas } = require("../repository/butacasRepository");
const router = Router();

router.get("/", async(req, res) => {
  const butacas = await getButacas();
  return res.status(200).json({ butacas: butacas });
});

module.exports = router;