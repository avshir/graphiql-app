import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  email: string | null;
  token?: string | null;
  id: string | null;
}

const initialState: IUserState = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem('userIsAuth', 'yes');
      localStorage.setItem('email', `${action.payload.email}`);
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.removeItem('userIsAuth');
      localStorage.removeItem('email');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
