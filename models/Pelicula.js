const { model, Schema } = require("mongoose");

const peliculaSchema = new Schema({
	id: Number,
	titulo: {
		type: String,
		unique: true,
	},
	imagen: String,
	descripcion: String,
	genero: String,
	duracion: String,
	actores: String,
	director: String,
	trailer: String,
	estreno: Boolean,
});

const peliculaModel = model("peliculas", peliculaSchema);

module.exports = peliculaModel;
