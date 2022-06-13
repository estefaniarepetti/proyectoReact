import React, {useEffect, useState, setItems} from "react";
import ItemList from '../ItemList/ItemList' 
import {Container, Row, Col} from "react-bootstrap"
import {getFirestore, getDoc,getDocs, collection, doc,query, where} from "firebase/firestore"

export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const db = getFirestore()
    if (categoryId) {
      // 3. Traigo una colleccion pero con filtros
      const q = query(
        collection(db, "productos"),
        where("category_id", "==", categoryId)
      );
      getDocs(q).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      // 2. Traigo una coleccion
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  },[categoryId])

  const handleSearch = (event) => {
    event.preventDefault()
    if (search !== "") {
      setItems(
        items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      const db = getFirestore();
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value === ""){
      const db = getFirestore();
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }
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


