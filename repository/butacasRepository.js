const Model = require("../models/Butacas");

const getButacas = () => {
	
		const butacas = Model.find({}, { _id: 0}).sort({ id: 1 });
        return butacas;
};

module.exports = {
	//getReserva
	getButacas
	//updateReserva
};