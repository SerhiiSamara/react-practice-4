import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'name',
  initialState: { users: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;
export const selectUsers = state => state.users;
