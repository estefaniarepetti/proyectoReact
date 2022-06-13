import React from "react"
import { act } from "react-dom/test-utils";

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
  const [cart, setCart] = React.useState([])
  // addToCart
  const addToCart = (item, count) => {

    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity++

        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: +count}])
    }
  }

  const removeFromCart = (id) => {
 
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart)

  }

  const deleteAll = () => {
    setCart([])     
  }
  
  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }

  const totalCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.description,
      0
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = cart.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };


  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
      totalCount,
      totalPrice,
      unitsPerProduct,

    }}
    >
    {children}

    </Provider>
  )
}

export {CartContext, CartProvider}