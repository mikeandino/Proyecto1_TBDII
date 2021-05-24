import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Button } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Views/Home";
import Registrar from "./Views/Registrar";
import Examenes from "./Views/Examenes";
import Clases from "./Views/Clases";
import Preguntas from "./Views/Preguntas";
import NavBar from "./Components/NavBar";

const App = () => {
  const [algo, setAlgo] = useState(true);
  const toggle = () => {
    setAlgo(!algo);
  };
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("alumno")));
  }, []);

  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/registrar" exact>
        <Registrar />
      </Route>
      <Route path="/examenes" exact>
        <Examenes />
      </Route>
      <Route path="/clases" exact>
        <Clases />
      </Route>
      <Route path="/preguntas" exact>
        <Preguntas />
      </Route>
    </Router>
  );
};

export default App;
