import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './ducks/homePageSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
