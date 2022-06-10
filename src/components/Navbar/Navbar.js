
import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import LogoNavBar from "../LogoNavbar/LogoNavbar"
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Header(){

    return(
        <>
        <Navbar bg="" expand="lg">
        <Container>
        <LogoNavBar /> 
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link > <Link to="/" className="nav-text">  Home </Link> </Nav.Link>
              <Nav.Link > <Link  to="/category/Movies" className="nav-text"> Movies </Link> </Nav.Link>
              <Nav.Link > <Link to="/category/Sale" className="nav-text"> Sale </Link> </Nav.Link>
             

            </Nav>
          </Navbar.Collapse>
        </Container>
  
        <Nav.Link> <Link to="/Cart"> 
              <CartIcon /> </Link> </Nav.Link>

      </Navbar>
           </>
 
    );
}