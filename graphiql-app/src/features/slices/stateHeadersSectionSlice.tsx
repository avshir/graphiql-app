import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const stateHeadersSectionSlice = createSlice({
  name: 'isOpenHeadersSection',
  initialState: {
    value: false,
  },
  reducers: {
    setOpenStateHeaders: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setOpenStateHeaders } = stateHeadersSectionSlice.actions;

export default stateHeadersSectionSlice.reducer;
