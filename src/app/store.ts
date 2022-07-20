import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filtersReducer from '../features/filtersSlice';
import galleryListReducer from '../features/galleryListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filtersReducer,
    galleries: galleryListReducer,
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
