const { Schema, model } = require("mongoose");

const funcionSchema = new Schema({
	idFuncion: Number,
	idPelicula: Number,
	titulo: String,
	sala: Number,
	dia: String,
	fecha: Date,
	horario: String,
	valorEntrada: {
		type: Number,
		default: 500,
	},
	entradasDisponibles: {
		type: Number,
		default: 1000,
	},
});

const funcionModel = model("funciones", funcionSchema);

module.exports = funcionModel;
