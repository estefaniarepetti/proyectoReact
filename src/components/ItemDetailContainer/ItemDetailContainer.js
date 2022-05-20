
import AddButton from "../AddButton/AddButton";
import {Container, Row , Col, Card} from "react-bootstrap"
import React from "react"

export default function ItemDetailContainer ({item}){


    return (
   <Card>
     <Card.Img variant="top" src={item.image} />
     <Card.Body>
      <Card.Title> {item.title} </Card.Title>
      <Card.Text>
        Some quick example text to buil on the card tittle and make up..
      </Card.Text>
      <h3>$ {item.price}</h3>
      <AddButton /> 
     </Card.Body>
   </Card>

  );
  }