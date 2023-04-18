import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Signin from "./signin";
import "./login.css";
const Login = () => {
  return (
    <div className="login__page">
      <div className="login__page-left">
        <h1>Board.</h1>
      </div>
      <div className="login__page-right">
        <div className="login__page-right_box">
          <div className="login__page-right_header">
            <h1>Sign in</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="login__page-right_sign">
            <Signin img={<FcGoogle />} title={"Sign in with Google"} />
            <Signin img={<AiFillApple />} title={"Sign in with Apple"} />
          </div>
          <div className="login__page-right_input">
            <div className="login__page-right_input-box">
              <div className="login__page-right_input-email">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" />
              </div>
              <div className="login__page-right_input-password">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="login__page-right_sign-a">
                <a href="#">Forgot password?</a>
              </div>
              <div className="login__page-right_sign-button">
                <button className="btn">Sign in</button>
              </div>
            </div>
          </div>
          <div className="login__page-right_box-register">
              <p>Don’t have an account?</p>
              <a href="#">Register here</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
