import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IVariables {
  [key: string]: string;
}

export const variablesSlice = createSlice({
  name: 'query',
  initialState: {
    value: {},
  },
  reducers: {
    setVariables: (state, action: PayloadAction<IVariables>) => {
      state.value = action.payload;
    },
  },
});

export const { setVariables } = variablesSlice.actions;

export default variablesSlice.reducer;
