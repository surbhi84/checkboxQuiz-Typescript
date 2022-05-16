import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { loginHandler } from "updateHandlers";
import { RootState } from "userRedux/store";

import "./login.css";

export const Login = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [loginUsername, setLoginUsername] = useState("sjtgshivam");
  const [loginPwd, setLoginPwd] = useState("acheDin");

  const user = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  console.log(user, "user outside effect");

  return (
    <div className="flex-center mv-xl">
      <div className="flex-center flex-col mg-m">
        <label className="mg-xs flex-col ">
          Username
          <input
            type="text"
            className="w15"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </label>
        <label className="mg-xs flex-col">
          Password
          <div className="flex-row input-eye-holder">
            <input
              type={isPwdVisible ? "text" : "password"}
              className="w15"
              value={loginUsername}
              onChange={(e) => setLoginPwd(e.target.value)}
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
        <button
          className="auth-btn border-prim mg-xs"
          onClick={() => loginHandler(loginUsername, loginPwd, dispatch)}
        >
          Login
        </button>
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
