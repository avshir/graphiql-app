import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const stateVariablesSectionSlice = createSlice({
  name: 'isOpenVariablesSection',
  initialState: {
    value: false,
  },
  reducers: {
    setOpenState: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setOpenState } = stateVariablesSectionSlice.actions;

export default stateVariablesSectionSlice.reducer;
