const router = require("express").Router();
const Examen = require("../models/examen.model");

router.route("/").get((req, res) => {
  Examen.find()
    .then((examen) => res.json(examen))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const idClase = req.body.idClase;
  const num_preguntas = req.body.num_preguntas;
  const newExamen = new Examen({ id, idClase, num_preguntas });

  newExamen
    .save()
    .then(() => res.json("Examen anadido excitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/find/:id").get((req, res) => {
  Examen.findById(req.params.id)
    .then((examen) => res.status(200).json(examen))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Examen.findById(req.params.id)
    .then((examen) => {
      examen.id = req.body.id;
      examen.idClase = req.body.idClase;
      examen.num_preguntas = req.body.num_preguntas;

      examen
        .save()
        .then(() => res.json("Examen actualizado excitosamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Examen.findByIdAndDelete(req.params.id)
    .then(() => res.json("Examen borrado exitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
