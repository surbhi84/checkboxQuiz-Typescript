import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const Signup = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [passwd, setPasswd] = useState("");

  function passwordHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === passwd) {
      signupDispatch({ type: "PASSWORD", payload: e.target.value });
    }
    console.error("passwords don't match");
  }

  const initalSignupDetails = {
    firstName: "",
    lastName: "",
    userName: "",
    dob: "",
    email: "",
    contact: 384734387,
    password: "",
  };

  interface SignupObject {
    firstName: string;
    lastName: string;
    userName: string;
    dob: string;
    email: string;
    contact: number;
    password: string;
  }

  type SignupReducerActions =
    | {
        type:
          | "FIRSTNAME"
          | "LASTNAME"
          | "USERNAME"
          | "DOB"
          | "EMAIL"
          | "PASSWORD";
        payload: string;
      }
    | { type: "CONTACT"; payload: number };

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
    }
  };

  const [signupDetails, signupDispatch] = useReducer(
    signupReducer,
    initalSignupDetails
  );

  return (
    <div className="flex-center mv-xl">
      <div className="flex-center flex-col mg-m">
        <div className="flex-row">
          <label className="mg-xs flex-col">
            First Name
            <input
              type="text"
              className="w15"
              onChange={(e) =>
                signupDispatch({ type: "FIRSTNAME", payload: e.target.value })
              }
            />
          </label>
          <label className="mg-xs flex-col">
            Last Name
            <input
              type="text"
              className="w15"
              onChange={(e) =>
                signupDispatch({ type: "LASTNAME", payload: e.target.value })
              }
            />
          </label>
        </div>
        <div className="flex-row">
          <label className="mg-xs flex-col">
            Username
            <input
              type="text"
              className="w15"
              onChange={(e) =>
                signupDispatch({ type: "USERNAME", payload: e.target.value })
              }
            />
          </label>
          <label className="mg-xs flex-col">
            Dob
            <input
              type="date"
              className="w15"
              onChange={(e) =>
                signupDispatch({ type: "DOB", payload: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex-row">
          <label className="mg-xs flex-col">
            Email
            <input
              type="text"
              className="w15"
              onChange={(e) =>
                signupDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </label>
          <label className="mg-xs flex-col">
            Contact
            <input
              type="number"
              className="w15"
              onChange={(e) =>
                signupDispatch({
                  type: "CONTACT",
                  payload: Number(e.target.value),
                })
              }
            />
          </label>
        </div>
        <div className="flex-row">
          <label className="mg-xs flex-col">
            Password
            <div className="flex-row input-eye-holder">
              <input
                type={isPwdVisible ? "text" : "password"}
                className="w15"
                onChange={(e) => setPasswd(e.target.value)}
              />
              {isPwdVisible ? (
                <FaEyeSlash
                  onClick={() => setIsPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              ) : (
                <FaEye
                  onClick={() => setIsPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              )}
            </div>
          </label>
          <label className="mg-xs flex-col">
            Confirm Password
            <div className="flex-row input-eye-holder">
              <input
                type={isPwdVisible ? "text" : "password"}
                className="w15"
                onChange={(e) => passwordHandler(e)}
              />
              {isPwdVisible ? (
                <FaEyeSlash
                  onClick={() => setIsPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              ) : (
                <FaEye
                  onClick={() => setIsPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              )}
            </div>
          </label>
        </div>
        <button
          className="auth-btn border-prim mg-s"
          onClick={() => console.log(signupDetails)}
        >
          Signup
        </button>
        <div className="small-text">or</div>
        <Link to="/login" className="text-dec-none prim-text">
          Already have an account
        </Link>
      </div>

      <img
        src="/assets/images/signup.svg"
        className="flex-center w-30 md-display-none"
      />
    </div>
  );
};
