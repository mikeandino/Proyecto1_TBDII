import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [alumno, setAlumno] = useState("");

  useEffect(() => {
    setAlumno(JSON.parse(localStorage.getItem("alumno")));
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>

          {alumno ? (
            <>
              {alumno.id === 0 ? (
                <>
                  <NavItem>
                    <Link to="/examenes" className="nav-link">
                      Examenes
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/clases" className="nav-link">
                      Clases
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/preguntas" className="nav-link">
                      Preguntas
                    </Link>
                  </NavItem>
                </>
              ) : null}
              <NavItem>
                <Button
                  onClick={() => {
                    localStorage.removeItem("alumno");
                    window.location.reload();
                  }}
                >
                  Log Out
                </Button>
              </NavItem>
            </>
          ) : null}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
