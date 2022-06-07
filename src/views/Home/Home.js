import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";  
import Navbar from "../../components/Navbar/Navbar"
import {Carousel} from "react-bootstrap"


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
      <p>Shop online </p>
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
      <p>Shop online .</p>
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
      <p>Shop online.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </section>


    <div>
    
     <h1> Conoce más  </h1>
      <ItemListContainer tittle="Nuestros Productos" />
      </div>
      <Footer />
   
    </>
  );
}