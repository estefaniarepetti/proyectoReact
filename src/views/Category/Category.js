import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner";


export default function Category (){
  const { categoryId } =  useParams();
  console.log(categoryId);

  return (
      <>  
      <div>
          <Navbar/> 
    
              <ItemListContainer categoryId={categoryId} />   
          </div>
    <Banner />
          <Footer />
      </>        
  );
}



