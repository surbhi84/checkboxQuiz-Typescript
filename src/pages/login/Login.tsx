import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./login.css";

export const Login = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  return (
    <div className="flex-center mv-xl">
      <div className="flex-center flex-col mg-m">
        <label className="mg-xs flex-col">
          Email
          <input type="text" className="w15" />
        </label>
        <label className="mg-xs flex-col">
          Password
          <div className="flex-row input-eye-holder">
            <input type={isPwdVisible ? "text" : "password"} className="w15" />
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
        <button className="auth-btn border-prim mg-xs">Login</button>
        <div className="small-text">or</div>
        <Link to="/signup" className="text-dec-none prim-text">
          Signup
        </Link>
      </div>
      <img
        src="/assets/images/login.svg"
        className="flex-center w-30 md-display-none"
      />
    </div>
  );
};
