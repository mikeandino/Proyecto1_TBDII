const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clase = new Schema({
    id: {type: Number, required: true, unique: true},
    nombreClase: {type: String, required: true}
});

module.exports = mongoose.model("clase", clase);