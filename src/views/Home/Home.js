import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";  
import Navbar from "../../components/Navbar/Navbar"


export default function Home (){
  return (
 <> 
    <div>
      <Navbar />
      <h1> </h1>
      <ItemListContainer tittle="Nuestros Productos" />
      <Footer />
    </div>
    </>
  );
}