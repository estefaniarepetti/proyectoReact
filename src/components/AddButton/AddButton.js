import React from "react"
import {button } from "react-bootstrap"

export default function AddButton({onSubmit}){
  const [count, setCount] = React.useState(1)
const stock = 8

  const onAdd = () => {
    if(count <stock){
    setCount (count + 1)
  }
  }
  const onDecrease = () =>{
    if (count >1 ){
      setCount(count -1)
    }
  }

  const StockButton = ({handleOnClick, text}) => {
    return <button className=" stock-button botonAzul" onClick={handleOnClick }> {text} </button>;
  };

const AddButton = ({handleOnSubmit}) => {
  return   <button className=" add-button botonPrincipal" onClick={handleOnSubmit }> Añadir al Carrito </button>;
};



return(
  <> 
  <div className="add-button-container">
    <StockButton  text= "-" handleOnClick={onDecrease}  />

   <span className="add-button-count"> {count} </span>

    <StockButton  text= "+" handleOnClick={onAdd} />


  </div>
   <AddButton  handleOnSubmit={onSubmit} /> 
   
   </>
)
}