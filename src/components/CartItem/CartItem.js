import React from 'react'
import { CartContext } from '../../context/CartContext'



const CartItem = ({ item }) => {
  const { removeFromCart, deleteAll } = CartContext();

  const { name, quantity, description, id, img,} = item;

  return (
    <tr className='border-b border-gray-200'>
      <th className='flex flex-col items-center '> 
      <img className='h-32 w-36' src={img} alt="simon cat imagen" />
      <div className='flex flex-col '>
        <p className='tracking-wide text-gray-700 md:text-lg sm:text-sm font-amastic'>{name}</p>
      </div>
      </th>
      <th className='text-gray-700 md:text-lg sm:text-sm font-amastic'>
      ${description}
      </th>
      <th className='text-gray-700 md:text-lg sm:text-sm font-amastic'>
      {quantity}
      </th>
      <th className='text-gray-700  md:text-lg sm:text-sm font-amastic'>
      ${quantity * description}
      </th>
      <th>
       <button className='md:text-lg sm:text-sm'  onClick={() => removeFromCart(id)}>  </button>
    </th>
     <th>
      <button className='md:text-lg sm:text-sm' onClick={() => deleteAll(id)}> </button>
       </th>
 </tr>
     );
    };
    
    export default CartItem;  
