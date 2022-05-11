import Header from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Container, Row, Col} from "react-bootstrap"


function App() {


  
  
  return (
    <> 
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
    
    </div>
    </>

  );
}

export default App;
