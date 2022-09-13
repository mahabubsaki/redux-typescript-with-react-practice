import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { singleProductSliceInterface } from "../interface/interface";

const initialState: singleProductSliceInterface = {
    foodId: []
}
const singleProductSlice = createSlice({
    initialState: initialState,
    name: 'single-product-reducer',
    reducers: {
        addToIdStore: (state, action: PayloadAction<string>) => {
            state.foodId = [...state.foodId, action.payload]
        },
        removeFromIdStore: (state, action: PayloadAction<string>) => {
            state.foodId = state.foodId.filter(food => food !== action.payload)
        },
    }
})
export const { addToIdStore, removeFromIdStore } = singleProductSlice.actions
export default singleProductSlice.reducer