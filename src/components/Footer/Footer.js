import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BottomNav from "../BottomNav/BottomNav"
import { faGithub} from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin } from '@fortawesome/free-solid-svg-icons' 

export default class Footer extends React.Component{
    render(){
        console.log(this.props)
return(

    <footer>
    <div className={"mx-6 pt-3 pb-4"}>
        <p className="flex flex-col justify-center pt-4 text-center border-t border-gray-200">
          2022 - Tienda-React -
          <span>
            Desarrollado con <span className="heart"> 💜 </span> por Estefania
            Repetti.
          </span>
        </p>

        <div className="flex flex-row items-center justify-center pt-1 gap-x-2">
          <a
            href="https://github.com/EstefaniaRepetti"
            target="_blank"
            rel="noreferrer"
          >
         <FontAwesomeIcon icon="faGithub" />
          
          </a>
          <a
            href="https://www.linkedin.com/in/EstefaniaRepetti/"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon="fa-brands faLinkedin" />
            
          </a>
        </div>
      </div>
      
    </footer>

)
    }
}