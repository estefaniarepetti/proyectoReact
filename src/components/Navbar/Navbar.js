
import React from "react"
import AddButton from "../AddButton/AddButton";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"


export default function Header(){

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Zapatos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
     <AddButton />
           </>
 
    );
}