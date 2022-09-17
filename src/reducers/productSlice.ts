import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInitialState, productSliceInterface } from "../interface/interface";

const initialState: productSliceInterface = {
    products: [],
    selectedProducts: [],
    visualProducts: [],
    isLoading: true,
    currentPage: 1,
    pageSize: 10
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
        },
        setSelectedProducts: (state, action: PayloadAction<productInitialState[]>) => {
            state.selectedProducts = action.payload
        },
        setVisualProducts: (state, action: PayloadAction<productInitialState[]>) => {
            state.visualProducts = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        }
    }
})
export const { setFullProduct, setLoadingState, setSelectedProducts, setVisualProducts, setCurrentPage, setPageSize } = productSlice.actions
export default productSlice.reducer