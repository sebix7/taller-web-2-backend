const { request, response } = require("express");
const { registrarUsuario } = require("../repository/authRepository");

const registrar = (req = request, res = response) => {
  const { nombre, apellido, direccion, email, password } = req.body;

  try {
    registrarUsuario(nombre, apellido, direccion, email, password);

    res.json({
      msg: "ok",
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Error al registrar usuario",
    });
  }
};

module.exports = {
  registrar,
};
