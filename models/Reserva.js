const { model, Schema } = require("mongoose");

const reservaSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	usuario:String,
	pelicula:String,
	asiento: String,
	fechaFuncion: String,
	candySnack: String,
});

const reservaModel = model("reserva", reservaSchema);

module.exports = reservaModel;
