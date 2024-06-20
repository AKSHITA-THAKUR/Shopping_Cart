import React, { useState } from "react";
import { Address } from "../types/address";

interface AddressFormProps {
	addAddress: (address: Address) => void;
	setShowForm: (showForm: boolean) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({addAddress,setShowForm,}) => {
  
	const [name, setName] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [state, setState] = useState<string>("");
	const [zip, setZip] = useState<string>("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const newAddress: Address = {
			id: Date.now(), //  id generation
			name,
			street,
			city,
			state,
			zip,
		};
		addAddress(newAddress);
		setShowForm(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-4">
				<h3 className="text-xl font-bold">Add New Address</h3>
				<div>
					<label className="block text-sm font-medium">Name:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">Street:</label>
					<input
						type="text"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">City:</label>
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">State:</label>
					<input
						type="text"
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">
						ZIP Code:
					</label>
					<input
						type="text"
						value={zip}
						onChange={(e) => setZip(e.target.value)}
						required
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
					/>
				</div>
				<div className="flex space-x-4">
					<button
						type="submit"
						className="bg-green-500 text-white px-4 py-2 rounded"
					>
						Save Address
					</button>
					<button
						type="button"
						onClick={() => setShowForm(false)}
						className="bg-red-500 text-white px-4 py-2 rounded"
					>
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};

export default AddressForm;
