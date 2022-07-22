import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filters {
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time' | 'rising';
  window: 'day' | 'week' | 'month' | 'year' | 'all';
  page: number;
  showViral?: true;
}

const initialState: filters = {
  section: 'hot',
  sort: 'viral',
  window: 'day',
  page: 0,
  showViral: true,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters: (state: filters, actions: PayloadAction<filters>) => {
      return (state = actions.payload);
    },
    nextPage: (state: filters) => {
      state.page += 1;
    },
    previousPage: (state: filters) => {
      state.page -= 1;
    },
  },
});

export const { changeFilters, nextPage, previousPage } = filtersSlice.actions;

export default filtersSlice.reducer;
