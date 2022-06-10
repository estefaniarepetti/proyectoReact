import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";  
import Navbar from "../../components/Navbar/Navbar"
import {Link, useNavigate} from "react-router-dom"
import {Carousel} from "react-bootstrap"
import Banner from "../../components/Banner/Banner";

export default function Home (){
  return (
 <> 
  <Navbar/> 

  <section className="carousel"> 
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/carrusel1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Movies & TV.</h3>
      <Link to="/products" className="nav-text"> 
      Shop Online </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/carrusel2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Video Games </h3>
      <Link to="/products" className="nav-text"> 
      Shop Online </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/carrusel3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Anime </h3>
       <Link to="/products" className="nav-text"> 
      Shop Online </Link>
  
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </section>

      <ItemListContainer tittle="Nuestros Productos" />

      
      <Banner/>
      <Footer />
   
    </>
  );
}