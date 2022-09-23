import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingrediantAndMeasureInterface, productInitialState, singleProductSliceInterface } from "../interface/interface";

const initialState: singleProductSliceInterface = {
    foodId: [],
    modalStatus: false,
    food: null,
    ingrediants: []
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
        setModalStatus: (state, action: PayloadAction<boolean>) => {
            state.modalStatus = action.payload
        },
        setModalFood: (state, action: PayloadAction<productInitialState | null>) => {
            state.food = action.payload
        },
        setIngrediant: (state, action: PayloadAction<ingrediantAndMeasureInterface[]>) => {
            state.ingrediants = action.payload
        }
    }
})
export const { addToIdStore, removeFromIdStore, setModalFood, setModalStatus, setIngrediant } = singleProductSlice.actions
export default singleProductSlice.reducer