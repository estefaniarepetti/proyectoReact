import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {
    // const {listaProductos } = props
  return (
      <>
        <h3>Lista de productos</h3>
    <div className='principal' >
        {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/> )}
    </div>
      </>
  )
}

export default ItemList