import { BrowserRouter , Routes , Route} from "react-router-dom";
import { createContext } from "react"
import Home from "./views/Home/Home"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Cart from "./views/Cart/Cart"

export const contexto = createContext() 
const Provider = contexto.Provider


function App (){

  const valorDelContexto = {
    nombre : "Tefi"
  }

  return( 
  
<BrowserRouter>
<Provider value={valorDelContexto}> 

<Routes>  
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/products" element={<Products/>}/>
  <Route extac path="/product/:productoId" element={<Product />} />
  <Route exact path="/category/:categoryId" element={<Category /> } />
  <Route exact path="/Cart" element={<Cart />} />

</Routes> 
</Provider> 

</BrowserRouter>

  )
}

export default App;   