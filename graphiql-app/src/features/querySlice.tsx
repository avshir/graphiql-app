import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    value: '',
  },
  reducers: {
    saveQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { saveQuery } = querySlice.actions;

export default querySlice.reducer;
