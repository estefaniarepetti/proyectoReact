import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import AddButton from '../AddButton/AddButton'  

export default function Item ({item}){
const navigate = useNavigate()

  return (
      
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={item.img} className="card-img-top" alt={item.name}/>
    <div className="card-body">
        <p className="card-text">{item.name}</p>
        <p className="card-text">{item.description}</p>
    </div>
    

    <AddButton />
</div>
  )
}

