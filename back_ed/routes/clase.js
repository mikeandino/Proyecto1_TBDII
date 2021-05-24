const router = require("express").Router();
const Clase = require("../models/clase.model");

router.route("/").get((req, res) => {
  Clase.find()
    .then((clase) => res.json(clase))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const nombreClase = req.body.nombreClase;
  const newClase = new Clase({ id, nombreClase });

  newClase
    .save()
    .then(() => res.json("Clase anadido excitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/find/:id").get((req, res) => {
  Clase.findById(req.params.id)
    .then((clase) => res.status(200).json(clase))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Clase.findById(req.params.id)
    .then((clase) => {
      clase.id = req.body.id;
      clase.nombreClase = req.body.nombreClase;

      clase
        .save()
        .then(() => res.json("Clase actualizado excitosamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Clase.findByIdAndDelete(req.params.id)
    .then(() => res.json("Clase borrado exitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

/*
           .-'"""'-.
      ,____|_______|____,
       '._____________.'  REACH FOR
           |.-- --.|      THE SKY!
           |(o) (o)|
          (|       |)
           |   U   |
 __        | .___. |    YOU'RE MY 
/|||       |       |     FAVORITE
||||       :       :      DEPUTY!
|  |/)      `.___.'
 \  /       __) (__
  \/\      /\ \ / /\
   \ \    /\ \ ^ / /\    THERE'S A
    \ \  / |  |0_/\_ \    SNAKE IN
     \ \/ /|  | \  /\ \    MY BOOT!
      \  / |  |0//\\ \ \
       \/  | /   \ |  \ \
           |/ .-. \|  / /
        .-'|-( ~ )-| / /   HI!
        \  |--`-'--|/ /   MY NAME'S WOODY!
         \ |       | /
          \|   |   |/
           |   |   |
           |   |   |     HOWDY PARDNER!
           |   |   |
           |   |   |
           |   |   |
           |___|___|     YEEEHAH COWBOY!
          `|---|---|'
          *|   |   |*
           |_._|_._|
          /'  /|\  '\    SOMEONE POISONED
     jgs /   /^ ^\   \    THE WATERHOLE!
        /__.'     `.__\
*/
