import React from "react";
import { requestLogin } from "../api/Login";

function Login() {
  const handleLogin = (socialLoginType) => {
    requestLogin(socialLoginType)
      .then(({ status, code, data, message }) => {
        if (status === 200 && code === 200) {
          window.location.assign(data);
        } else {
          console.error("Redirect URL 요청 실패");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin("google")}>Google 로그인</button>
    </div>
  );
}

export default Login;
