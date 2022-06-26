import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import ItemList from "../ItemList/ItemList"
import {getFirestore, getDoc, doc} from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer({ productoId }) {

  const [item, setItem] = React.useState({});
  
  React.useEffect(() => {
    const db = getFirestore()
    // 1. Traigo un producto
    const productRef = doc(db, "productos", productoId);
    getDoc(productRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
      
    });     
  }, [productoId]);  
  return (    
  
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1> </h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  
  );
}