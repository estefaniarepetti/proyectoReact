import React, {useEffect, useState, setItems} from "react";
import ItemList from '../ItemList/ItemList' 
import { producto } from '../Productos/Productos'
import {Container, Row, Col} from "react-bootstrap"

export default function ItemListContainer ({categoryId}){
const [items, setItems]= React.useState ([]);
  React.useEffect(()=> {
      
    if(categoryId){
    setItems(producto.filter(item => item.category_id ===categoryId));
  }
  else{
    setItems(producto);
  }
 
}, [categoryId])

 return (
   <>
   <section class="store">
    <h2 class="store__texto"> Product's  </h2>
    <div class="container1">
      <div class="items">
        <div class="row2">
       


   <ItemList items={items}/>
   </div>
 </div>
 </div>
 
 </section>
 
  </>
    
  );
}


