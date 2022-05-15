import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const Signup = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  return (
    <div className="flex-center mv-xl">
      <div className="flex-center flex-col mg-m ">
        <div className="flex-row">
          <label className="mg-xs flex-col">
            First Name
            <input type="text" className="w15" />
          </label>
          <label className="mg-xs flex-col">
            Last Name
            <input type="text" className="w15" />
          </label>
        </div>
        <div className="flex-row">
          <label className="mg-xs flex-col">
            Username
            <input type="text" className="w15" />
          </label>
          <label className="mg-xs flex-col">
            Dob
            <input type="text" className="w15" />
          </label>
        </div>

        <div className="flex-row">
          <label className="mg-xs flex-col">
            Email
            <input type="text" className="w15" />
          </label>
          <label className="mg-xs flex-col">
            Contact
            <input type="text" className="w15" />
          </label>
        </div>
        <div className="flex-row">
          <label className="mg-xs flex-col">
            Password
            <div className="flex-row input-eye-holder">
              <input
                type={isPwdVisible ? "text" : "password"}
                className="w15"
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
        <button className="auth-btn border-prim mg-s">Signup</button>
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
