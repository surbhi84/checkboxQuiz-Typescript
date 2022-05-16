import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRaw } from "backend/interfaces";

interface userObject {
  encodedToken: string;
  user: UserRaw;
}

const initialState: userObject = {
  encodedToken: "",
  user: {
    id: "",
    fname: "",
    lname: "",
    username: "",
    password: "",
    dob: "",
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
