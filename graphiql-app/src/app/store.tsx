import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/apiSlice';
import requestReducer from '../features/requestSlice';
import schemaReducer from '../features/schemaSlice';
import queryReducer from '../features/querySlice';
import userReducer from '../features/slices/userSlice';

const store = configureStore({
  reducer: {
    schema: schemaReducer,
    data: dataReducer,
    request: requestReducer,
    query: queryReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
