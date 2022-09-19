import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;

            const itemIndex = state.cartItems.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                state.cartItems[itemIndex] = { ...state.cartItems[itemIndex], quantity: state.cartItems[itemIndex].quantity += 1 }
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const nextCartItems = state.cartItems.filter(item => item.id !== id);

            state.cartItems = nextCartItems;

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        increment: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);

            state.cartItems[itemIndex].quantity += 1;

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            }
            else {
                state.cartItems[itemIndex].quantity = 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        clear: (state) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        }
    }
})
export const { addToCart, removeFromCart, increment, decrement, clear } = cartSlice.actions;
export default cartSlice.reducer;