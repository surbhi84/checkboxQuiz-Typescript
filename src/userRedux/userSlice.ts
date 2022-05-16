import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRaw } from "backend/interfaces";

const initialState: UserRaw = {
  id: "661",
  fname: "Raj",
  lname: "Verma",
  username: "RajV",
  password: "acheDin",
  dob: "1997-03-07",
  contact: 8057700000,
  email: "rajv@gmail.com",
  createdAt: "",
  updatedAt: "",
  score: 60,
  quizPlayed: 10,
  recentlyPlayed: [
    { categoryId: "11", level: "EASY" },
    { categoryId: "11", level: "MID" },
    { categoryId: "11", level: "HARD" },
  ],
  correctAnswered: 60,
  incorrectAnswered: 40,
  role: "ADMIN",
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserRaw>) =>
      (state = action.payload),
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
