const express = require("express");
const cors = require("cors");
//const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const Alumno = require("./routes/alumno");
const Examen = require("./routes/examen");
const Pregunta = require("./routes/pregunta");
const Clase = require("./routes/clase");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*app.use(
    helmet({contentSecurityPolicy: false,
})
)*/
mongoose.connect("mongodb://localhost:27017/Proyecto_NoSQL", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connection with MongoDB was successful");
});

app.use("/alumno", Alumno);
app.use("/examen", Examen);
app.use("/pregunta", Pregunta);
app.use("/clase", Clase);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
