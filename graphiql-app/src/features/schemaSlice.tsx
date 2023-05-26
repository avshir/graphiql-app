import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://countries.trevorblades.com/';

export const fetchSchema = createAsyncThunk<ISchema, string, { rejectValue: string }>(
  'schema/fetchSchema',
  async function (_, { rejectWithValue }) {
    const query = '{__schema{types{name,fields{name}}}}';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return rejectWithValue(`${response.statusText}`);
        }
      }

      const data = await response.json();
      return data;
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(`${message}`);
    }
  }
);

interface IResponseState {
  list: object;
  loading: boolean;
  error: string | null;
}

interface ISchema {
  data: object;
}

const initialState: IResponseState = {
  list: {},
  loading: false,
  error: null,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchema.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchema.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default schemaSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
