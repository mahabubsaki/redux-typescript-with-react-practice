import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navSlice from '../reducers/navSlice';
import productSlice from '../reducers/productSlice';

export const store = configureStore({
  reducer: {
    navSlice: navSlice,
    productSlice: productSlice
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
