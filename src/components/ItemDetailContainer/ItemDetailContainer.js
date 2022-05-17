import {productos} from "../productos/productos/"
import item from "../Item/Item"
import React from "react"


export default function ItemListContainer (){

  const [items , setItems] =  React.useState ([])
  const getItem = new Promise ((resolve, reject) => {
    setTimeout (() => {

      resolve(productos);
    },3000)
    }).then (() => {

      console.log("getItem")
      setTim(productos[2]);
    })
    return (
      <>           
          <Item item = {item} />
      </>   

  )
  }