import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useSignupReducer } from "./signupReducer";

export const Signup = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isConfirmPwdVisible, setIsConfirmPwdVisible] = useState(false);
  const [signupDetails, signupDispatch] = useSignupReducer();

  //   console.log(
  //     signupDetails.contact.toString().length,
  //     signupDetails.password !== signupDetails.confirmPassword,
  //     "pswds",
  //     signupDetails.password === "" || signupDetails.confirmPassword === ""
  //   );
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
                onChange={(e) =>
                  signupDispatch({ type: "PASSWORD", payload: e.target.value })
                }
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
                type={isConfirmPwdVisible ? "text" : "password"}
                className="w15"
                onChange={(e) =>
                  signupDispatch({
                    type: "CONFIRMPASSWORD",
                    payload: e.target.value,
                  })
                }
              />
              {isPwdVisible ? (
                <FaEyeSlash
                  onClick={() => setIsConfirmPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              ) : (
                <FaEye
                  onClick={() => setIsConfirmPwdVisible((p) => !p)}
                  className="pwd-eye prim-text"
                />
              )}
            </div>
          </label>
        </div>
        <button
          className="auth-btn border-prim mg-s"
          onClick={() => console.log(signupDetails)}
          disabled={
            signupDetails.password !== signupDetails.confirmPassword ||
            signupDetails.password === "" ||
            signupDetails.confirmPassword === "" ||
            signupDetails.contact.toString().length !== 10
          }
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
