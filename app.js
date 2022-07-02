const express = require("express");
const cors = require("cors");
require("./config/bd");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/peliculas", require("./routes/peliculas"));
app.use("/funciones", require("./routes/funciones"));
app.use("/store", require("./routes/store"));
app.use("/reserva", require("./routes/reserva"));
app.use("/historial-reservas", require("./routes/historial-reservas"));
app.use("/admin", require("./routes/admin"));

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
