const router = require("express").Router();
const Alumno = require("../models/alumno.model");

router.get("/", (req, res) => {
  Alumno.find()
    .then((alumno) => res.status(200).json(alumno))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const login = req.body.login;
  const password = req.body.password;
  const newAlumno = new Alumno({ id, nombre, login, password });

  newAlumno
    .save()
    .then(() => res.json("Alumno añadido excitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/find/:id").get((req, res) => {
  Alumno.findById(req.params.id)
    .then((alumno) => res.status(200).json(alumno))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Alumno.findById(req.params.id)
    .then((alumno) => {
      alumno.id = req.body.id;
      alumno.nombre = req.body.nombre;
      alumno.login = req.body.login;
      alumno.password = req.body.password;

      alumno
        .save()
        .then(() => res.json("Alumno actualizado excitosamente"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Alumno.findByIdAndDelete(req.params.id)
    .then(() => res.json("Alumno borrado exitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
/*
            .
        \ | /
        _\|/_
        .' ' ' '.        ___
    _.|.--.--.|.___.--'___`-.
    .'.'||  |  ||`----'"`   ``'`
.'.'  ||()|()|| 
.___..-'.'    /       \
`----'"`     /   .-.   \
    (.'.(___).'.)
        `.__.-.__.'
        |_|   |_|
        `.`-'.'
            `"`

            .-"""-.
            /  . -  \
            \       /
    .-""-.,:.-_-.<
    /    _; o / )o|
    \  ; / `  `"  '\
    '.-| ;-.____, |             .,
        \ `._~_/ /             /"/
,.           /`-.__.-'\`-._     ,",' ;
\"\         / /|   o   \._ `-._; /  ./-.
; ';,     / / |    ’___\ `-.,( /  //.-'
:\  \\;_.-" ;  |.-"``    `\    /-. /.-'
:\  .\),.-'  /      }{    |   '..'
\ .-\      |          , /
'..'      ;'        , /
        ( __ `;--;'__`)
        `//'`    `||`
        _//        ||
.-"-._,(__)      .(__).-""-.
/          \     /           \
\          /     \           /
`'--=="--`       `--""==--'`

                                ,
                               //\
                              / | ;
                              | /_|
                            .-"`  `"-. 
                          /`          `\
                         /              \
                   .-.,_|      .-""""-. |
                  |     `",_,-'  (((-. '(  
                   \ (`"=._.'/   (  (o>'-`"#
        ,           '.`"-'` /     `--`  '==;
       /\\            `'--'`\         _.'~~
      / | \                  `.,___,-} 
      | |  |                   )  {  }
       \ \ (.--==---==-------=' o {  }
        ",/` (_) (_)  (_)    (_)   \ /
         / ()   o   ()    ()        ^|
         \   ()  (    () o        ;  /
          `\      \         ;    / } |
            )      \       /   /`  } /
         ,-'       |=,_   |   /,_ ,'/
         |    _,.-`/   `"=\   \\   \
         | ."` \  |        \   \`\  \
         | |    \ \         `\  \ `\ \
         | |     \ \          `\ \  \ \
         | |      \ \           \ \  \ \
         | |       \ \           \ \  \ \
         | |        \ \           \ \  \ \
         | |         ) \           \ \  ) \
     jgs `) \        ^ww            ) \ ^ww
          ^ww                       ^ww


*/
