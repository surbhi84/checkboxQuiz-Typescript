import { useReducer } from "react";

export interface SignupObject {
  firstName: string;
  lastName: string;
  userName: string;
  dob: string;
  email: string;
  contact: number;
  password: string;
  confirmPassword: string;
}

type SignupReducerActions =
  | {
      type:
        | "FIRSTNAME"
        | "LASTNAME"
        | "USERNAME"
        | "DOB"
        | "EMAIL"
        | "PASSWORD"
        | "CONFIRMPASSWORD";
      payload: string;
    }
  | { type: "CONTACT"; payload: number };

export const useSignupReducer = () => {
  const initalSignupDetails = {
    firstName: "",
    lastName: "",
    userName: "",
    dob: "",
    email: "",
    contact: 0,
    password: "",
    confirmPassword: "",
  };

  const signupReducer = (
    state: SignupObject,
    action: SignupReducerActions
  ): SignupObject => {
    switch (action.type) {
      case "FIRSTNAME":
        return { ...state, firstName: action.payload };
      case "LASTNAME":
        return { ...state, lastName: action.payload };
      case "USERNAME":
        return { ...state, userName: action.payload };
      case "DOB":
        return { ...state, dob: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "CONTACT":
        return { ...state, contact: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "CONFIRMPASSWORD":
        return { ...state, confirmPassword: action.payload };
    }
  };

  const [signupDetails, signupDispatch] = useReducer(
    signupReducer,
    initalSignupDetails
  );

  return [signupDetails, signupDispatch] as [
    SignupObject,
    React.Dispatch<SignupReducerActions>
  ];
};
