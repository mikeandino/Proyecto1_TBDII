const router = require("express").Router();
const Pregunta = require("../models/pregunta.model");

router.route("/").get((req, res) => {
  Pregunta.find()
    .then((pregunta) => res.json(pregunta))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const descripcion = req.body.descripcion;
  const idClase = req.body.idClase;
  const respuesta = req.body.respuesta;
  const newPregunta = new Pregunta({
    id,
    titulo,
    descripcion,
    idClase,
    respuesta,
  });

  newPregunta
    .save()
    .then(() => res.json("Pregunta anadido excitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/find/:id").get((req, res) => {
  Pregunta.findById(req.params.id)
    .then((Pregunta) => res.status(200).json(Pregunta))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Pregunta.findById(req.params.id)
    .then((pregunta) => {
      pregunta.id = req.body.id;
      pregunta.titulo = req.body.titulo;
      pregunta.descripcion = req.body.descripcion;
      pregunta.idClase = req.body.idClase;
      pregunta.respuesta = req.body.respuesta;

      pregunta
        .save()
        .then(() => res.json("Pregunta actualizado excitosamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Pregunta.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pregunta borrada exitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
