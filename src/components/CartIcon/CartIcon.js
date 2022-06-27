import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

const CardWidget = () => {
  const { totalCount } = useCartContext ();
 
  return (

      <NavLink to='/cart' className='flex items-center'> 
  <FontAwesomeIcon icon={faCartShopping} />
                {totalCount() > 0 && (
                  <span className="ml-2 text-base font-medium text-gray-900">{totalCount()}</span>
              )}
      </NavLink>
      );
}

export default CardWidget