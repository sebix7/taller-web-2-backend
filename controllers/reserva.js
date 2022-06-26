const {
	saveReserva
} = require("../repository/reservaRepository");

const nuevaReserva = async (req, res) => {
	const bodyRequest = req.body;
	const nuevo = {
        id: bodyRequest.id,
		pelicula: bodyRequest.pelicula,
		asiento: bodyRequest.asiento,
		fechaFuncion: bodyRequest.fechaFuncion,
		candySnack: bodyRequest.candySnack	
	};
   
    console.log(nuevo)
	const guardarReserva = await saveReserva(nuevo);
	if (!guardarReserva) {
		return res
			.status(404)
			.json({ mensaje: "No se pudo guardar la reserva", error: true });
	}
	return res.status(201).json({ mensaje: "Reserva registrada correctamente" });
};

module.exports = { nuevaReserva};

