import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import {Link} from "react-router-dom";
export default function CartIcon(){ 
return(
  <div className='CartIcon'>
     <FontAwesomeIcon icon={faCartShopping} />
  </div>

);
}