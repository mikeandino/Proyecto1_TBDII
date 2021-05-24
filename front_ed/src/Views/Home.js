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
import { Link } from "react-router-dom";

const Home = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (event) => {
    if (event.name === "login") {
      setLogin(event.value);
    } else {
      setPassword(event.value);
    }
  };
  const Logon = () => {
    axios
      .get("http://localhost:4000/alumno")
      .then((res) => {
        console.log(res.data);
        const alumno = res.data.find(
          (element) => element.login === login && element.password === password
        );
        console.log(alumno);
        if (alumno) {
          localStorage.setItem("alumno", JSON.stringify(alumno));
          window.location.reload();
        } else {
          setMessage("El alumno no existe");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <Container>
      {JSON.parse(localStorage.getItem("alumno")) ? (
        <h1>Home</h1>
      ) : (
        <>
          <h1>Log In</h1>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="login"
                id="login"
                placeholder="JohnDoe"
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
            {message ? <div>{message}</div> : null}
            <Button onClick={() => Logon()}>Log In</Button>
            <Link to="/registrar">Registrar</Link>
          </Form>{" "}
        </>
      )}
    </Container>
  );
};
export default Home;
