const { Schema, model } = require("mongoose");

const funcionSchema = new Schema({
	idFuncion: Number,
	idPelicula: Number,
	titulo: String,
	sala: Number,
	dia: String,
	fecha: Date,
	horario: String,
	valorEntrada: Number,
	entradasDisponibles: Number,
});

const funcionModel = model("funciones", funcionSchema);

module.exports = funcionModel;
