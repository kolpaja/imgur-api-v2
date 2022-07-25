import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type galleryList = {
  list: [] | null;
};

const initialState: galleryList = {
  list: [],
};

export const galleryListSlice = createSlice({
  name: 'galleries',
  initialState,
  reducers: {
    getGalleries: (state: galleryList, action: PayloadAction<[]>) => {
      state.list = action.payload;
    },
  },
});

export const { getGalleries } = galleryListSlice.actions;

export default galleryListSlice.reducer;
