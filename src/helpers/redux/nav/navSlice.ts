import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: "/",
  signUpReveal: false,
};

const authSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
    setSignUpReveal: (state, action) => {
      state.signUpReveal = action.payload;
    },
  },
});

export const { setActiveNav, setSignUpReveal } = authSlice.actions;
export default authSlice.reducer;
