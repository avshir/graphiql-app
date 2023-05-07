import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AnyAction, PayloadAction } from '@reduxjs/toolkit';

const API_URL = 'https://countries.trevorblades.com/';

export const fetchData = createAsyncThunk<string, string, { rejectValue: string }>(
  'data/fetchData',
  async function (query, { rejectWithValue }) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return rejectWithValue('Connect to API Failed!');
    }

    const data = await response.json();
    return data;
  }
);

interface IResponseState {
  list: string;
  loading: boolean;
  error: string | null;
}

const initialState: IResponseState = {
  list: '',
  loading: false,
  error: null,
};

export const apiSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
