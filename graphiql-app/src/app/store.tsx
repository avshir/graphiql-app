import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/apiSlice';
import requestReducer from '../features/requestSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    request: requestReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
