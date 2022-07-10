import React, { useState, useEffect } from "react";
import { userLogin } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginMessage, setLoginMessage] = useState({});

  const onLogin = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    if (result.error) {
      setLoginMessage(result);
    }
    localStorage.setItem("token", result.token);
    setLoginStatus(true)
    localStorage.setItem("username", username)
   
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setLoginStatus(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
      {loginStatus ? (
        <button onClick={onLogOut}>Log Out</button>
      ) : (
        <>
        <form
          onSubmit={(e) => {
            onLogin(e);
          }}
        >
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
        {loginMessage.error ? (
          <>
          <h3>{loginMessage.name}</h3>
            <p>{loginMessage.message}</p>
          </>
        ) : null}</>
          )}
    </div>
  );
};

export default Login;