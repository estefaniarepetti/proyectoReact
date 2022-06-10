import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


const CarritoVacio = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center max-w-full p-6 mx-auto lg:max-w-7xl lg:items-star">
        <div>
        </div>
        <div className="items-center p-4 tracking-wider uppercase text-black-500 font-shadows">
            <p className='text-2xl'>Ups!!! ¡Parece que tu carrito esta vacio!</p>
          <Link to='/' className='flex flex-row items-center pt-4'>  Volver al Inicio para comprar...</Link>
        </div>
    </div>
   <Footer />
   </>
  );
};                 

export default CarritoVacio