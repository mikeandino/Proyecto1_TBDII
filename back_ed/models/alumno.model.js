const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultado = new Schema({
  idExamen: { type: Number },
  nota: { type: Number },
});

const alumnoSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resultados_examenes: [resultado],
});

module.exports = mongoose.model("alumno", alumnoSchema);
