import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { producto } from "../Productos/Productos";
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer ({ title, productoId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(producto.find(item => item.id === productoId));
  }, [productoId]);
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>Hola </h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
}