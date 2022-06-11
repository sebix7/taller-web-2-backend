const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/peliculas", require("./routes/peliculas"));
app.use("/api/funciones", require("./routes/funciones"));

app.listen(3002, () => {
  console.log("Example app listening on port 3002!");
});
