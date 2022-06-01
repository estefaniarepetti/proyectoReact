import { Card } from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
import { useContext } from "react";

export default function ItemDetail ({item}) {



  return (
    <Card >
      <Card.Img variant="top" src={item.img} className="card-img-top" alt={item.name} style={{width:'18rem', margin:'.5rem'}} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content. 
        </Card.Text>
        <div className="price"> 
        <h3>$ {item.description} </h3>
        </div>
        <AddButton />
      </Card.Body>
    </Card>
     
  );
}