import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navSlice from '../reducers/navSlice';
import productSlice from '../reducers/productSlice';
import SearchInputSlice from '../reducers/SearchInputSlice';
import singleProductSlice from '../reducers/singleProductSlice';

export const store = configureStore({
  reducer: {
    navSlice: navSlice,
    productSlice: productSlice,
    singleProductSlice: singleProductSlice,
    searchSlice: SearchInputSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
