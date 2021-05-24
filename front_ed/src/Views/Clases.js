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

const Clases = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [Clases, setClases] = useState([]);

  const Crear = () => {
    const newClases = { id, nombreClase: nombre };
    axios
      .post("http://localhost:4000/clase/add", newClases)
      .then(() => {
        alert("Clase creada");
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
      case "nombre":
        {
          setNombre(event.value);
        }
        break;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/clase")
      .then((res) => {
        setClases(res.data);
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
          <Label for="exampleNombre">Nombre de la Clase</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre de la Clase"
            value={nombre}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <Button onClick={() => Crear()}>Crear Clases</Button>
      </Form>
      <h1 className="mt-2">Clases</h1>
      <ui>
        {Clases.map((element, index) => (
          <li key={index}>
            ID:{element.id}, Nombre de la Clase:{element.nombreClase}
            {element.num_preguntas}
          </li>
        ))}
      </ui>
    </Container>
  );
};

export default Clases;
