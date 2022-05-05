import CartIcon from "../CartIcon/CartIcon";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNav"; 
export default function Header(){
   
const Buttom = ({texto}) => {
    console.log(texto)
    return(
    <input type="button" value={texto} />
    )
}
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
       <CartIcon count={8} />
      </Navbar>
    
       </>
    );
}