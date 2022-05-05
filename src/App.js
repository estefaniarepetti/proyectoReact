import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartIcon from "./components/CartIcon/CartIcon"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Container, Row, Col} from "react-bootstrap"


function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
    <Container>
    <Row className="my-5">
    <Col>
    <ItemListContainer  greeting={"Mi Ecommerce"} />
    </Col>
    </Row>
    </Container>

      </main>
      <Footer greeting={"Pie de pagina & "} greeting2={" Copyright"} />
    </div>
    
  );
}

export default App;
