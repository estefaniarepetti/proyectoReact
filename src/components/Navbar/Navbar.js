
import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Header(){

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand> Funko's World</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">  Home </Link> </Nav.Link>
              <Nav.Link> <Link to="/products"> Prinicipales </Link> </Nav.Link>
              <Nav.Link> <Link  to="/category/1">  Disney </Link> </Nav.Link>
              <Nav.Link> <Link to="/category/2">  Series </Link> </Nav.Link>
             
              <Nav.Link>  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartIcon />
      </Navbar>
           </>
 
    );
}