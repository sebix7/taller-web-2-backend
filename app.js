const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/peliculas", require("./routes/peliculas"));
app.use("/funciones", require("./routes/funciones"));
app.use("/store", require("./routes/store"));
app.use("/reserva", require("./routes/butacas"));
app.listen(3000, () => {
  console.log("Example app listening on port 3002!");
});
