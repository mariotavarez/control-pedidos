import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// Link
import Link from "next/link";
const NavbarMobile = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://control-pedidos.s3.us-east-2.amazonaws.com/general/logo-blanco.png"
              width="180"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="/dashboard">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/pedidos">Pedidos</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMobile;
