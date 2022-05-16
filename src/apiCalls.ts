import axios from "axios";
import { SignupObject } from "pages/signup/signupReducer";

export const getUser = (token: string) => {
  return axios.get("/user", {
    headers: { authorization: token as string },
  });
};

export const userLogin = (username: string, pwd: string) => {
  return axios.post("/user/login", {
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
  return axios.post("/user/signup", {
    username: userName,
    fname: firstName,
    lname: lastName,
    dob,
    contact,
    email,
    password,
  });
};
