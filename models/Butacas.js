const { model, Schema } = require("mongoose");

const butacaSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	columna:String,
	fila:String,
	disponible:Boolean
});

const butacaModel = model("butaca", butacaSchema);

module.exports = butacaModel;