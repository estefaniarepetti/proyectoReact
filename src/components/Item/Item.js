import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { Card } from "react-bootstrap"

export default function Item ({item}){
const navigate = useNavigate()

  return (
    <> 
    <Card style={{ width: "18rem" }} onClick={() => navigate(`/product/${item.id}`)}>
          <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
             <img src={item.img} className="item-image" alt={item.name}/>
             <div>  
             <p className="item-title">{item.name}</p>
</div>
              <div class="item-details">

              <p className="item-price"> <b> Total: {item.description} </b></p>
           

     <Link to ={`/product/${item.id}`} className="item-button btn btn-primary addToCart">  
    Ver más detalle 
     </Link> 

              </div>
            </div>
          </div>
</Card>

</>

  );
}

