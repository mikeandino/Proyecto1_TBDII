import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  FormText,
} from "reactstrap";
import axios from "axios";

const Preguntas = () => {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [idClase, setIdClase] = useState("");
  const [respuesta, setRespuesta] = useState(true);
  const [Preguntas, setPreguntas] = useState([]);

  const Crear = () => {
    const newPregunta = { id, titulo, descripcion, idClase, respuesta };
    axios
      .post("http://localhost:4000/pregunta/add", newPregunta)
      .then(() => {
        alert("Pregunta creada");
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
      case "titulo":
        {
          setTitulo(event.value);
        }
        break;
      case "descripcion":
        {
          setDescripcion(event.value);
        }
        break;
      case "idClase":
        {
          setIdClase(event.value);
        }
        break;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/pregunta/")
      .then((res) => {
        setPreguntas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Form>
        <h1>Crear Pregunta</h1>
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
          <Label for="exampleTitulo">Titulo</Label>
          <Input
            type="titulo"
            name="titulo"
            id="titulo"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDescripcion">Descripcion</Label>
          <Input
            type="descripcion"
            name="descripcion"
            id="descripcion"
            placeholder="Descripcion"
            value={descripcion}
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
          <Label>La respuesta es: {respuesta ? "verdadera." : "falsa."}</Label>
          <ButtonGroup>
            <Button
              onClick={() => {
                setRespuesta(true);
              }}
            >
              Verdadero
            </Button>
            <Button
              onClick={() => {
                setRespuesta(false);
              }}
            >
              Falso
            </Button>
          </ButtonGroup>
        </FormGroup>
        <Button onClick={() => Crear()}>Crear Pregunta</Button>
      </Form>
      <h1 className="mt-2">Preguntas</h1>
      <ui>
        {Preguntas.map((element, index) => (
          <li key={index}>
            Id:{element.id}, Titulo:{element.titulo}, Descripcion:
            {element.descripcion}, Id de la Clase:{element.idClase}, Respuesta:
            {element.respuesta ? " verdadera." : " falsa."}
          </li>
        ))}
      </ui>
    </Container>
  );
};

export default Preguntas;
