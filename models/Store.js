const { model, Schema } = require("mongoose");

const StoreSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	producto: String,
	imagen: String, 
	descripcion: String, 
	cantidad: Number, 
	precio: Number, 
});

const StoreModel = model("Store", StoreSchema);

module.exports = StoreModel;

 
