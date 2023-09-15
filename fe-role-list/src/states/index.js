import { configureStore } from '@reduxjs/toolkit';
import rolesReducer from './roles/reducer';

const store = configureStore({
  reducer: {
    roles: rolesReducer,
  },
});

export default store;