import React, {useEffect, useState, setItems} from "react";
import ItemList from '../ItemList/ItemList' 
import {Container, Row, Col} from "react-bootstrap"
import {getFirestore, getDoc,getDocs, collection, doc} from "firebase/firestore"

export default function ItemListContainer ({title, categoryId}){
const [items, setItems]= React.useState ([]);

  React.useEffect(()=> {
      const db = getFirestore ()

   

      const productsRef = collection (db, "productos")
      getDocs (productsRef).then(snapshots => {
 setItems(snapshots.docs.map (doc => ({id: doc.id, ...doc.data()})))
       
      })
  }, [])

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


