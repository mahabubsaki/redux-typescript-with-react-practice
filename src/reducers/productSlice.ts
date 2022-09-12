import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInitialState, productSliceInterface } from "../interface/interface";

const initialState: productSliceInterface = {
    products: [],
    isLoading: true
}
const productSlice = createSlice({
    name: 'product-reducer',
    initialState,
    reducers: {
        setFullProduct: (state, action: PayloadAction<productInitialState[]>) => {
            state.products = action.payload
        },
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})
export const { setFullProduct, setLoadingState } = productSlice.actions
export default productSlice.reducer