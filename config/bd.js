const mongoose = require("mongoose");

const { DB_URI } = require("./env");
const connection = mongoose.connect(DB_URI);

connection
	.then((res) => console.log("Conexión realizada exitosamente"))
	.catch((err) => console.log("Hubo un error en la conexión"));
