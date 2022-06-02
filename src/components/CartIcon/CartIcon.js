import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { Link } from "react-router-dom";
import {CartContext}  from "../../context/CartContext"

export default function CartIcon(){ 
const { cart } = React.useContext(CartContext);

return(
  <div className='CartIcon'>
  <Link to="/Cart"> 
     <FontAwesomeIcon icon={faCartShopping} />
     <span className="badge">
       {cart.length}
     </span>
     </Link> 
  </div>

);
}