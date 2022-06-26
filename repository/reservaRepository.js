const Model = require("../models/Reserva");

const saveReserva = async (data) => {
	const ultimaReservaCargada = await Model.findOne({})
		.sort({ id: -1 })
		.limit(1);
	if (!ultimaReservaCargada) {
		data.id = 1;
	} else {
		data.id = ultimaReservaCargada.id + 1;
	}
	const reserva = new Model(data);
	const request = await reserva.save(data).catch((err) => null);
	return request;
};

const getReservas = () => {
	const response = Model.find({}, { _id: 0, __v: 0 }).sort({ id: 1 });
	return response;
};

module.exports = {
	/*getReserva,*/
	getReservas,
	saveReserva
	/*updateReserva,
	deleteReserva,*/
};