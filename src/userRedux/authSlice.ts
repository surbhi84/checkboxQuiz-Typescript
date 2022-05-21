import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";

// const user = useSelector((state: RootState) => state.currentUser.user);

// interface forIsAuth {
//   isAuth: () => boolean;
// }

// const isAuth = () => {
//   return !(user.username === "" || user.username === undefined);
// };

export const authSlice = createSlice({
  name: "isAuth",
  initialState: false,
  // initialState: isAuth,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
