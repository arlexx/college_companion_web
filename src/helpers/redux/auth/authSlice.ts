import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: 0,
    username: "",
    firstName: "",
    lastName: "",
    token: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        _id: 0,
        username: "",
        firstName: "",
        lastName: "",
        token: "",
      };
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
