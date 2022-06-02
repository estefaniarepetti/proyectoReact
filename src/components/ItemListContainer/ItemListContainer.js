import React, {useEffect, useState, setItems} from "react";
import ItemList from '../ItemList/ItemList' 
import { producto } from '../Productos/Productos'
import {Container, Row, Col} from "react-bootstrap"


export default function ItemListContainer ({categoryId}){
const [items, setItems]= React.useState ([]);
  React.useEffect(()=> {
      
    if(categoryId){
    setItems(producto.filter(item => item.category_id ===categoryId));
  }
  else{
    setItems(producto);
  }
 
}, [categoryId])

 return (
   <>
   <Container className="itemlist-container"> 
   <Row>
  <Col>
  
  </Col>
   </Row>
   <Row>
     <ItemList items={items}/>
   </Row>
   
   </Container>
    </>
   
  );
}


