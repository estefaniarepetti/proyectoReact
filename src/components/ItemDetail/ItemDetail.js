import React from "react"
import { Card } from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
import { useCartContext  } from "../../context/CartContext"

export default function ItemDetail ({item}) {
  
const { addToCart, unitsPerProduct } = useCartContext();
const [count, setCount] = React.useState(0) 



  return (
    <Card className="articulo__main">
    <section className="main__section">
      <div className="section__grid2">
        <div className="grid__imgSecundarias">
      <Card.Img variant="top" src={item.img} className="card-img-top" alt={item.name} style={{width:'18rem', margin:'.5rem'}} />
      </div>
      <Card.Body className="grid__datos">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="datos__descripcion">
        DELIVERY DELAY BETWEEN 15 TO 30 BUSINESS DAYS. Product in stock
        </Card.Text>
        <div className="datos__precio"> 
        <h3> $ {item.description} </h3>
        </div>
        <div> 
        { unitsPerProduct (item.id) ? (
          <button className="botonPrincipal"> Ir al Carrito</button>
        ):(
          <AddButton onSubmit={() => addToCart(item,count)}
        count={count}
        setCount={setCount}
        stock={item.stock} 
        />  
         )}
         </div>
      </Card.Body>
    </div>
      </section>
    </Card>
     
  );
}


