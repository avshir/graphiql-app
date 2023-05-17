import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQueryRequest } from '../../components/documentation-explorer/explorer-types';

export const argumentsSlice = createSlice({
  name: 'arguments',
  initialState: {
    value: {},
  },
  reducers: {
    saveArguments: (state, action: PayloadAction<IQueryRequest>) => {
      state.value = action.payload;
    },
  },
});

export const { saveArguments } = argumentsSlice.actions;

export default argumentsSlice.reducer;
