import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "isAuth",
  initialState: false,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
