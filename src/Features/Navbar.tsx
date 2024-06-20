import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: React.FC = () => {
	const cartItems = useSelector((state: RootState) => state.cart.items);

	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	const totalItemsCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white text-2xl font-bold">
					<Link to="/">Akshita's Store</Link>
				</div>
				<div className="text-white flex items-center space-x-4">
					{isAuthenticated ? (
						<button
							onClick={() =>
								logout({
									logoutParams: {
										returnTo: window.location.origin,
									},
								})
							}
							className="bg-blue-500 hover:bg-blue-700 text-white border-white font-bold py-2 px-4 rounded"
						>
							Logout
						</button>
					) : (
						<button
							onClick={() => loginWithRedirect()}
							className="bg-blue-500 hover:bg-blue-700 text-white border-white font-bold py-2 px-4 rounded"
						>
							Login
						</button>
					)}

					<Link to="/cart" className="flex items-center">
						<svg
							className="w-6 h-6 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M10 13l1.6 8m5.4-8l1.6 8M6 9h12m-6 6v6"
							/>
						</svg>
						<span>Cart ({totalItemsCount})</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
