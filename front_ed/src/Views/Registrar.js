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

const Registrar = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
      case "login":
        {
          setLogin(event.value);
        }
        break;
      case "password":
        {
          setPassword(event.value);
        }
        break;
    }
  };
  const Registrar = () => {
    const newAlumno = { id, nombre, login, password };
    axios
      .post("http://localhost:4000/alumno/add", newAlumno)
      .then(() => {
        alert("Alumno creado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Form>
        <h1>Registrar</h1>
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
          <Label for="exampleNombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLogin">Login</Label>
          <Input
            type="text"
            name="login"
            id="login"
            placeholder="Login"
            value={login}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="Password"
            placeholder="aaaaa"
            value={password}
            onChange={(e) => onChangeHandler(e.currentTarget)}
          />
        </FormGroup>
        <Button onClick={() => Registrar()}>Registrar</Button>
      </Form>
    </Container>
  );
};

export default Registrar;
