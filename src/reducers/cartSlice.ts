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
            const currentFoods = state.cartFood.find(item => item.idMeal === action.payload.idMeal)
            if (!currentFoods) {
                state.cartFood = [...state.cartFood, action.payload]
            } else {
                currentFoods.quantity++
                const restFoods = state.cartFood.filter(item => item.idMeal !== action.payload.idMeal)
                const currentFoodIndex = state.cartFood.findIndex(item => item.idMeal === action.payload.idMeal)
                restFoods.splice(currentFoodIndex, 0, currentFoods)
                state.cartFood = [...restFoods]
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartFood = state.cartFood.filter(item => item.idMeal !== action.payload)
        },
        clearAll: (state,) => {
            state.cartFood = []
        },
        changeQuantity: (state, action: PayloadAction<string>) => {
            const restFoods = state.cartFood.filter(item => item.idMeal !== action.payload)
            const currentFoods = state.cartFood.find(item => item.idMeal === action.payload)
            const currentFoodIndex = state.cartFood.findIndex(item => item.idMeal === action.payload)
            if (currentFoods) {
                currentFoods.quantity++
                restFoods.splice(currentFoodIndex, 0, currentFoods)
            }
            state.cartFood = [...restFoods]
        }
    }
})
export const { addToCart, changeQuantity, clearAll, removeFromCart } = cartSlice.actions
export default cartSlice.reducer