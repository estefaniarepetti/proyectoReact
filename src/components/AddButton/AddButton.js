import React from "react"


export default function AddButton(){
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
    return <button ClassName=" stock-button" onClick={handleOnClick }> {text} </button>;
  };

const AddButton = () => {
  return   <button ClassName=" add-button" > Añadir al Carrito </button>;
};

return(
  <> 
  <div className="add-button-container">
    <StockButton className="boton azul" text= "-" handleOnClick={onDecrease}  />

   <span className="add-button-count"> {count} </span>

    <StockButton  ClassName=" boton1 verde" text= "+" handleOnClick={onAdd} />


  </div>
   <AddButton/> 
   </>
)
}