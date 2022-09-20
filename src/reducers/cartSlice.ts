import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartSliceInterface, productInitialState } from "../interface/interface";

const initialState: cartSliceInterface = {
    cartFood: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productInitialState>) => {
            state.cartFood = [...state.cartFood, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartFood = state.cartFood.filter(item => item.idMeal !== action.payload)
        },
        clearAll: (state,) => {
            state.cartFood = []
        },
        changeQuantity: (state, action: PayloadAction<productInitialState[]>) => {
            state.cartFood = [...action.payload]
        }
    }
})
export const { addToCart, changeQuantity, clearAll, removeFromCart } = cartSlice.actions
export default cartSlice.reducer