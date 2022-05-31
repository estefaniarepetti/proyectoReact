
import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import LogoNavBar from "../LogoNavbar/LogoNavbar"
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Header(){

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand> Funko's World</Navbar.Brand>
        <LogoNavBar /> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">  Home </Link> </Nav.Link>
              <Nav.Link> <Link to="/products"> Prinicipales </Link> </Nav.Link>
              <Nav.Link> <Link  to="/category/Disney">  Disney </Link> </Nav.Link>
              <Nav.Link> <Link to="/category/Series">  Series </Link> </Nav.Link>
             
          
            </Nav>
          </Navbar.Collapse>
        </Container>
  
        <Nav.Link> <Link to="cart"> 
              <CartIcon /> </Link> </Nav.Link>

      </Navbar>
           </>
 
    );
}