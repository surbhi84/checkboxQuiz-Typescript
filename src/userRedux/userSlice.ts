import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "backend/interfaces";

export interface userObject {
  encodedToken: string;
  user: UserResponse;
  // isAuth: () => {};
}

const initialState: userObject = {
  encodedToken: "",
  user: {
    id: "",
    fname: "",
    lname: "",
    username: "",
    dob: "",
    contact: NaN,
    email: "",
    createdAt: "",
    score: 0,
    quizPlayed: 0,
    recentlyPlayed: [],
    correctAnswered: 0,
    incorrectAnswered: 0,
    role: "PLAYER",
    questionIds: [],
    categoryIds: [],
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userObject>) =>
      (state = action.payload),
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
