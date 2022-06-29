
import { useCartContext } from '../../context/CartContext';
import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import CartItem from "../../components/CartItem/CartItem"
import CarritoVacio from './../../components/CarritoVacio/CarritoVacio';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    const { cartList, emptyCart, totalPrice, totalCount} = useCartContext();
  
return (
<>
<Navbar />
      <h2 className='self-center p-6 leading-tight tracking-wider text-center text-gray-800 uppercase md:text-2xl sm:text-xl font-amastic'>Mi Carrito</h2>

      {totalCount () === 0 ? (
        <CarritoVacio></CarritoVacio>
      ): (

      <div>
      <table className='mx-auto md:w-4/5 sm:w-full'>
        <thead>
          <tr className='border-b border-gray-200'>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'> Producto</th>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'>Precio</th>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'>Cantidad</th>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'>Subtotal</th>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'>Por Producto</th>
            <th className='items-center tracking-wide text-gray-800 md:text-xl font-amastic sm:text-xs'>Todos los Productos</th>
          </tr>
        </thead>
      {cartList.map((item) => ( 
        <CartItem key={item.id} item={item} />
      ))}
       </table>
        <div className="principal">
        <div className="principalIcon" > 
        <FontAwesomeIcon icon={faTrash} />
        </div>
          <button className=' button2' onClick={() => emptyCart()}>  Click aquí para vaciar todo tu Carrito
          </button> 
          
          <div className="descripcion">
            <div className="descipcionDos">
                <p className='parrafoItem' > <b> Cantidad de items: </b></p>
                <p className='parrafoItem'> <b> {totalCount()} </b></p>
            </div>
            <div className=" descripcionTres" >
                <p> <b> Total: </b></p>
                <p><b>${totalPrice()} </b></p>
            </div>
            <div className=" envio ">
              <p className="envioP"> <b> ¡El envío es gratis!  </b></p>
            </div>
            <Link to='/checkout' className='final'>Finalizar Compra </Link>
          </div>
        </div>   
    </div>
  
 )} 
 
 

 </>
 );
  };
 
  export default Cart;
