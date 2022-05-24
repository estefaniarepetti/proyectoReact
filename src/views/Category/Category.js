import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";


export default function Category (){
  const { categoryId } =  useParams();
  console.log(categoryId);

  return (
      <>  
      <div>
          <Navbar/> 
        
              <h1>Categories</h1>
              <ItemListContainer categoryId={categoryId} />   
          </div>
      </>        
  );
}



