import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { removeItem, updateQuantity, clearCart } from "./cartSlice";
import Navbar from "../Navbar";

const Cart: React.FC = () => {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRemove = (id: number) => {
		dispatch(removeItem({ id }));
	};

	const handleQuantityChange = (id: number, quantity: number) => {
		dispatch(updateQuantity({ id, quantity }));
	};

	const handleAddress = () => {
		navigate("/address");
	};

	if (cartItems.length === 0) {
		return <h1>Cart is empty</h1>;
	}

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const calculateTotalAmount = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	return (
		<div className="container mx-auto px-4">
			<Navbar />
			<h2 className="text-2xl font-bold my-4">This is my Cart</h2>
			<div className="flex">
				<div className="flex-grow">
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="bg-white shadow-md rounded-lg p-4 mb-4"
						>
							<div className="flex">
								<div className="h-32 w-32 flex-shrink-0">
									<img
										src={item.image}
										alt={item.title}
										className="h-full w-full object-contain rounded"
									/>
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold">
										{item.title}
									</h3>
									<p className="text-gray-600">
										{item.description}
									</p>
									<p className="text-xl font-bold mt-2">
										Rs {item.price}
									</p>
									<div className="flex items-center mt-2">
										<button
											onClick={() =>
												handleQuantityChange(
													item.id,
													item.quantity - 1
												)
											}
											className="text-lg text-gray-500"
											disabled={item.quantity <= 1}
										>
											-
										</button>
										<span className="mx-2 text-lg">
											{item.quantity}
										</span>
										<button
											onClick={() =>
												handleQuantityChange(
													item.id,
													item.quantity + 1
												)
											}
											className="text-lg text-gray-500"
											disabled={item.quantity >= 5}
										>
											+
										</button>
									</div>
									<button
										onClick={() => handleRemove(item.id)}
										className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex-shrink-0 w-1/3 ml-4 mt-20">
					<div className="bg-white shadow-md rounded-lg p-4 mb-4">
						<h3 className="text-lg font-semibold">Order Summary</h3>
						<p className="text-xl font-bold mt-2">
							Total Amount: Rs {calculateTotalAmount()}
						</p>
						<button
							onClick={handleClearCart}
							className="mt-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-full"
						>
							Clear Cart
						</button>
						<button
							onClick={handleAddress}
							className="mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full"
						>
							Proceed to buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
