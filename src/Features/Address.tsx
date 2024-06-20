import React, { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import { Address } from "../types/address";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

const DeliveryAddress: React.FC = () => {
	const [addresses, setAddresses] = useState<Address[]>([]);
	const [showForm, setShowForm] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const navigate = useNavigate();

	useEffect(() => {
		const storedAddresses = localStorage.getItem("addresses");
		if (storedAddresses) {
			setAddresses(JSON.parse(storedAddresses));
		}
	}, []);

	const addAddress = (address: Address) => {
		const updatedAddresses = [...addresses, address];
		setAddresses(updatedAddresses);
		localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
	};

	const calculateTotalAmount = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const handleClick = (id: number) => {
		setSelectedId(id);
	};

	return (
		<>
			<h1 className="w-full text-4xl h-20 bg-green-100 text-center flex items-center justify-center">
				ORDER SUMMARY DETAILS
			</h1>

			<div className="flex p-6">
				<div className="flex-grow mr-4">
					<h2 className="text-2xl font-bold mb-4">
						Delivery Addresses
					</h2>

					<ul className="mb-4 space-y-4">
						{addresses.map((address) => (
							<li
								key={address.id}
								onClick={() => handleClick(address.id)}
								className={`p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer ${
									selectedId === address.id
										? "bg-gray-300"
										: ""
								}`}
							>
								<div className="font-bold">{address.name}</div>
								<div>{address.street}</div>
								<div>
									{address.city}, {address.state}{" "}
									{address.zip}
								</div>
							</li>
						))}
					</ul>

					<button
						onClick={() => setShowForm(true)}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Add New Address
					</button>

					{showForm && (
						<div className="mt-4">
							<AddressForm
								addAddress={addAddress}
								setShowForm={setShowForm}
							/>
						</div>
					)}
				</div>

				<div className="flex-shrink-0 w-1/3 ml-4 mt-10">
					<div className="bg-white shadow-md rounded-lg p-4 mb-4">
						<h3 className="text-lg font-semibold">Order Summary</h3>
						<p className="text-xl font-bold mt-2">
							Total Amount: Rs {calculateTotalAmount()}
						</p>
						<button
							className="mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full"
							onClick={() => {
								navigate("/payment");
							}}
						>
							Make Payment
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
