import React from 'react'
import AddButton from '../AddButton/AddButton'  

const Item = ({producto}) => {

  return (
      
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={producto.img} className="card-img-top" alt={producto.name}/>
    <div className="card-body">
        <p className="card-text">{producto.name}</p>
        <p className="card-text">{producto.description}</p>
    </div>
    
    
    <AddButton />
</div>
  )
}

export default Item