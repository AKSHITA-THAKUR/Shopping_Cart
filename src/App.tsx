
import './App.css'
import ProductList from './Features/Products/productList'
import  Product  from "./Features/Products/product";
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Cart from "./Features/Cart/cart"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
    </BrowserRouter>
   
    </>
  )
}

export default App
