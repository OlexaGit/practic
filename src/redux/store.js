import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
