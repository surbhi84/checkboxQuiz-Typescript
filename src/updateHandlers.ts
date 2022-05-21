import { AnyAction } from "@reduxjs/toolkit";
import { getUser, userLogin, userSignup } from "apiCalls";
import { SignupObject } from "pages/signup/signupReducer";
import { Dispatch } from "react";
import { setAuth, setUser } from "userRedux";

export async function tokenLoginHandler(
  token: string,
  dispatch: Dispatch<AnyAction>
) {
  try {
    const response = await getUser(token);
    dispatch(setUser({ encodedToken: token, user: response.data.user }));
    dispatch(setAuth(true));
  } catch (err) {
    console.error(err);
  }
}

export async function loginHandler(
  username: string,
  pwd: string,
  dispatch: Dispatch<AnyAction>
) {
  try {
    const response = await userLogin(username, pwd);
    dispatch(setUser(response.data));
    dispatch(setAuth(true));
    localStorage.setItem("token", response.data.encodedToken);
  } catch (err) {
    console.error(err);
  }
}

export async function signupHandler(
  signupDetails: SignupObject,
  dispatch: Dispatch<AnyAction>
) {
  try {
    const response = await userSignup(signupDetails);
    dispatch(setUser(response.data));
    dispatch(setAuth(true));
    localStorage.setItem("token", response.data.encodedToken);
  } catch (err) {
    console.error(err);
  }
}
