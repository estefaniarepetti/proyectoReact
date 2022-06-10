/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';


const Banner = () => {
  return (
    <div className="Banner  max-w-full p-2 mt-8 bg-red-600 lg:flex-row lg:max-w-7xl lg:items-star">
          <div className="flex items-center justify-center">
            <span className='Banner__p'>Gracias por visitar nuestra tienda, te esperamos nuevamente! </span>      
          </div>
        
          <iframe src="https://giphy.com/embed/62nLvOtwm8jl3bEIg1" width="100" height="100" frameBorder="0"  allowFullScreen></iframe>
      </div>
   )
};

export default Banner;