const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const examen = new Schema({
  id: { type: Number, required: true, unique: true },
  idClase: { type: Number, required: true },
  num_preguntas: { type: Number, required: true },
});

module.exports = mongoose.model("examen", examen);
