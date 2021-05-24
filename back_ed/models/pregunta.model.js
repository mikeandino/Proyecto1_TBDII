const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pregunta = new Schema({
  id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  idClase: { type: Number, required: true },
  respuesta: { type: Boolean, required: true },
});

module.exports = mongoose.model("pregunta", pregunta);
