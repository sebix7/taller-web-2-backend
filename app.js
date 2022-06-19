const express = require("express");
const cors = require("cors");
require("./config/bd");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/peliculas", require("./routes/peliculas"));
app.use("/funciones", require("./routes/funciones"));

app.listen(3000, () => {
	console.log("Example app listening on port 3002!");
});
