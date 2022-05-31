import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { producto } from '../Productos/Productos'
import AddButton from '../AddButton/AddButton'  

export default function Item ({item}){
const navigate = useNavigate()

  return (
    <> 
  
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={item.img} className="card-img-top" alt={item.name}/>
    <Link to ={`/product/${item.id}`} className="text-card">  
    <div className="card-body">
        <p className="card-text">{item.name}</p>
        </div>
        <div className="card-body">
        <p className="card-price">Total: {item.description}</p>
    </div>
    </Link> 

    <AddButton />
</div>
</>

  );
}

