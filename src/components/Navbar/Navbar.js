
import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
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
              <Nav.Link> <Link To="/"> Home </Link> </Nav.Link>
              <Nav.Link> <Link To="product"> Prinicipales</Link> </Nav.Link>
              <Nav.Link> <Link To="products"> Disney</Link>  </Nav.Link>
              <Nav.Link> <Link To="products"> Movies</Link>  </Nav.Link>

              <Nav.Link> Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartIcon />
      </Navbar>
      
   
           </>
 
    );
}