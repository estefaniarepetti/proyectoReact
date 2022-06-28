
import { useCartContext } from '../../context/CartContext';
import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import CartItem from "../../components/CartItem/CartItem"
import CarritoVacio from './../../components/CarritoVacio/CarritoVacio';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer"
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
        <FontAwesomeIcon icon={faTrash}  />
          <button className=' button2' onClick={() => emptyCart()}>  Click aquí para vaciar todo tu Carrito
          </button> 
          
          <div className="descripcion">
            <div className="descipcionDos">
                <p>Cantidad de items:</p>
                <p className='parrafoItem'>{totalCount()}</p>
            </div>
            <div className=" descripcionTres" >
                <p>Total:</p>
                <p>${totalPrice()}</p>
            </div>
            <div className=" envio ">
              <p className="envioP">¡El envío es gratis!</p>
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
