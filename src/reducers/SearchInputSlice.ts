import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInitialState, SearchInputSliceInterface } from "../interface/interface";

const initialState: SearchInputSliceInterface = {
    visible: false,
    matchedFood: [],
    searching: false,
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'search-input',
    initialState: initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload
        },
        setSearching: (state, action: PayloadAction<boolean>) => {
            state.searching = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setMatchedFood: (state, action: PayloadAction<productInitialState[]>) => {
            state.matchedFood = action.payload
        }
    }
})
export const { setMatchedFood, setSearchValue, setSearching, setVisible } = searchSlice.actions
export default searchSlice.reducer