import React from "react";
import { requestLogin } from "../api/Login";

function Login() {
  const handleLogin = (socialLoginType) => {
    requestLogin(socialLoginType);
  };

  return (
    <div>
      <div>Login</div>
      <button onClick={() => handleLogin("google")}>Google 로그인</button>
    </div>
  );
}

export default Login;
