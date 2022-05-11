import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {

  return (
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={producto.img} className="card-img-top" alt={producto.name}/>
    <div className="card-body">
        <p className="card-text">{producto.name}</p>
        <p className="card-text">{producto.description}</p>
    </div>
    <ItemCount stock={producto.stock}/>
</div>
  )
}

export default Item