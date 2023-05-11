import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {
    value: '',
  },
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRequest } = requestSlice.actions;

export default requestSlice.reducer;
