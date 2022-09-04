import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navbarInitialState } from '../interface/interface'

const initialState: navbarInitialState = {
    isLargeDevice: false,
    isSmallDevice: false,
}
const navSlice = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        toggleSmall: (state, action: PayloadAction<boolean>) => {
            state.isSmallDevice = action.payload
        },
        toggleLarge: (state, action: PayloadAction<boolean>) => {
            const states = action.payload
            state.isLargeDevice = states
        }
    }
})
export const { toggleLarge, toggleSmall } = navSlice.actions
export default navSlice.reducer