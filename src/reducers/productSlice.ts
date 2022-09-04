import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInitialState, productSliceInterface } from "../interface/interface";

const initialState: productSliceInterface = {
    product: null
}
const productSlice = createSlice({
    name: 'product-reducer',
    initialState,
    reducers: {
        setFullProduct: (state, action: PayloadAction<productInitialState[]>) => {
            state.product = action.payload
        }
    }
})