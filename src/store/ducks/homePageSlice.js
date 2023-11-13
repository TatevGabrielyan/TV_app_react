import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { setCollapsed } = sidebarSlice.actions;
export const selectCollapsed = (state) => state.sidebar.collapsed;
export default sidebarSlice.reducer;