import axios from "axios";
import {
  CategoryModel,
  HighscoresModel,
  Level,
  QuestionModel,
  UserResponse,
} from "backend/interfaces";
import { Category } from "pages";
import { SignupObject } from "pages/signup/signupReducer";
import { userObject } from "userRedux/userSlice";

export const getUser = (token: string) => {
  return axios.get<{ user: UserResponse }>("/user", {
    headers: { authorization: token as string },
  });
};

export const userLogin = (username: string, pwd: string) => {
  return axios.post<userObject>("/user/login", {
    username: username,
    password: pwd,
  });
};

export const userSignup = ({
  firstName,
  lastName,
  userName,
  dob,
  email,
  contact,
  password,
}: SignupObject) => {
  return axios.post<userObject>("/user/signup", {
    username: userName,
    fname: firstName,
    lname: lastName,
    dob,
    contact,
    email,
    password,
  });
};

export const getHighscore = () => {
  return axios.get<Array<HighscoresModel>>("/highscore");
};

export const getCategories = () => {
  return axios.get<Array<CategoryModel>>("/category");
};

export const getQuestions = (
  token: string,
  tag: { category: string; level: Level }
) => {
  return axios.get<{ questions: Array<QuestionModel> }>(
    `/question?tags=${tag.category}&lvl=${tag.level}&length=${5}`,
    {
      headers: { authorization: token as string },
    }
  );
};

export const patchUser = (
  token: string,
  score: number,
  quizPlayed: number,
  category: CategoryModel,
  level: Level,
  correctAnswered: number,
  incorrectAnswered: number
) => {
  return axios.patch(
    "/user",
    {
      score,
      quizPlayed,
      recentlyPlayed: [
        {
          category,
          level,
        },
      ],
      correctAnswered,
      incorrectAnswered,
    },
    { headers: { authorization: token as string } }
  );
};
