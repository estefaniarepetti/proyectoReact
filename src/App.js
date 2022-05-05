import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartIcon from "./components/CartIcon/CartIcon"
import {Container, Row, Col} from "react-bootstrap"


function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
    <Container>
    <Row className="my-5">
    <Col>
    <h3>Mi Ecommerce</h3>
    </Col>

    </Row>
    </Container>

      </main>
      <Footer greeting={"Pie de Pagina"} greeting2={"copyright"} />
    </div>
    
  );
}

export default App;
