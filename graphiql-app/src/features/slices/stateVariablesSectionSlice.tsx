import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const stateVariablesSectionSlice = createSlice({
  name: 'isOpenVariablesSection',
  initialState: {
    value: false,
  },
  reducers: {
    setOpenStateVariables: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setOpenStateVariables } = stateVariablesSectionSlice.actions;

export default stateVariablesSectionSlice.reducer;
