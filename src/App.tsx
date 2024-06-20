import "./App.css";
import ProductList from "./Features/Products/productList";
import Product from "./Features/Products/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Features/Cart/cart";
import ErrorPage from "./Features/ErrorPage";
import Payment from "./Features/Payment";
import Address from "./Features/Address";

function App() {

	
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/address" element={<Address/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
