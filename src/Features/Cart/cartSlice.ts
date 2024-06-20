import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

interface CartItem extends Product {
	quantity: number;
}

interface CartState {
	items: CartItem[];
}
const initialCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]"); 
const initialState: CartState = {
	items: initialCartItems,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (
			state,
			action: PayloadAction<{ product: Product; quantity: number }>
		) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.product.id
			);

			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
			} else {
				state.items.push({
					...action.payload.product,
					quantity: action.payload.quantity,
				});
			}
			localStorage.setItem("cartItems", JSON.stringify(state.items));
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				item.quantity = action.payload.quantity;
			}
			localStorage.setItem("cartItems", JSON.stringify(state.items));
		},
		removeItem: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			localStorage.setItem("cartItems", JSON.stringify(state.items));
		},
		clearCart: (state) => {
			state.items = [];
			localStorage.setItem("cartItems", JSON.stringify(state.items));
		},
	},
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
