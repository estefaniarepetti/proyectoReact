import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 

export default function CartIcon(){ 
return(
  <div className='CartIcon'>
     <FontAwesomeIcon icon={faCartShopping} />
  </div>

);
}