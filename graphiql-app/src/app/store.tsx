import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/apiSlice';
import requestReducer from '../features/requestSlice';
import schemaReducer from '../features/schemaSlice';
import queryReducer from '../features/querySlice';
import userReducer from '../features/slices/userSlice';
import variablesReducer from '../features/slices/variablesSlice';
import argumentsReducer from '../features/slices/argumentsSlice';
import isOpenVariablesSectionReducer from '../features/slices/stateVariablesSectionSlice';
import isOpenHeadersSectionReducer from '../features/slices/stateHeadersSectionSlice';

const store = configureStore({
  reducer: {
    schema: schemaReducer,
    data: dataReducer,
    request: requestReducer,
    query: queryReducer,
    user: userReducer,
    variables: variablesReducer,
    arguments: argumentsReducer,
    isOpenVariablesSection: isOpenVariablesSectionReducer,
    isOpenHeadersSection: isOpenHeadersSectionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
