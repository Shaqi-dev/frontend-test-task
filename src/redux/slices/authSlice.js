import { createSlice } from '@reduxjs/toolkit';
import { GUEST } from '../../constants';

const initialState = {
  isLoggedIn: false,
  userName: null,
  userType: GUEST,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.userType = action.payload.userType;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userName = null;
      state.userType = GUEST;
    },
  },
});

const { reducer } = authSlice;

export const { logOut } = authSlice.actions;

export const authSelector = (state) => state.auth;

export default reducer;
