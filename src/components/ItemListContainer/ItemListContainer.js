import React, { useEffect, useState }  from 'react'
import ItemList from '../ItemList/ItemList'
import { traerProd } from '../Productos/Productos'

const ItemListContainer = ({saludo}) => {
  
  const [listaProductos, setListaProductos]=useState([])
  const [cargando, setCargando] = useState(false)
 

  useEffect(()=>{
    setCargando(true)
    traerProd
    .then((res)=> setListaProductos(res))
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
   // eslint-disable-next-line
  }, [])


  return (
    <div>
        <h1>{saludo}</h1>
        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
    </div>
  )
}

export default ItemListContainer