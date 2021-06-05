import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";

const Examenes = () => {
  const [id, setId] = useState("");
  const [idClase, setIdClase] = useState("");
  const [num_preguntas, setNum_Preguntas] = useState("");
  const [Examenes, setExamenes] = useState([]);

  const Crear = () => {
    const newExamen = { id, idClase, num_preguntas };
    axios
      .post("http://localhost:4000/examen/add", newExamen)
      .then(() => {
        alert("Examen creado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeHandler = (event) => {
    switch (event.name) {
      case "id":
        {
          setId(event.value);
        }
        break;
      case "idClase":
        {
          setIdClase(event.value);
        }
        break;
      case "num_preguntas":
        {
          setNum_Preguntas(event.value);
        }
        break;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/examen/")
      .then((res) => {
        setExamenes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Form>
        <h1>Crear Examen</h1>
        <FormGroup>
          <Label for="exampleId">Id</Label>
          <Input
            type="text"
            name="id"
            id="ID"
            placeholder="ID"
            value={id}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleidClase">ID de Clase</Label>
          <Input
            type="text"
            name="idClase"
            id="idClase"
            placeholder="ID de la Clase"
            value={idClase}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNum_Preguntas">Numero de Preguntas</Label>
          <Input
            type="text"
            name="num_preguntas"
            id="num_preguntas"
            placeholder="Numero de Preguntas"
            value={num_preguntas}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <Button onClick={() => Crear()}>Crear Examen</Button>
      </Form>
      <h1 className="mt-2">Examenes</h1>
      <ul>
        {Examenes.map((element, index) => (
          <li key={index}>
            Examen:{element.id}, Id de la Clase:{element.idClase}, Preguntas:
            {element.num_preguntas}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Examenes;
