const { model, Schema } = require("mongoose");

const StoreSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	producto: {
		type: String,
		unique: true,
	},
	imagen: String,
	descripcion: String,
	cantidad: Number,
	precio: Number, 
});

const StoreModel = model("Store", StoreSchema);

module.exports = StoreModel;


