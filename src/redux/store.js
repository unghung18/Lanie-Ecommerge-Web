import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import cartUiSlice from './cartUISlice';

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    }
})