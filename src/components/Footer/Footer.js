import React from "react"


export default class Footer extends React.Component{
    render(){
        console.log(this.props) 
          const styles = {
            text: "font-regular text-xs text-gray-700 tracking-wide leading-normal",
            icon: "fill-current cursor-pointer",
          }
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

      </div>

     
    </footer>

)
    }
}