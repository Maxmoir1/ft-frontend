import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signMessage, setSignMessage] = useState({});

  const onSignUp = async (e) => {
    e.preventDefault();
    const result = await registerUser(username, password);
    if (result.error) {
      setSignMessage(result);
    }
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", username);
    const myToken = result.token;
    setToken(myToken);
  };

  return (
    <div>
      <form onSubmit={onSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
      {signMessage.error ? (
        <>
          <h3>{signMessage.name}</h3>
          <p>{signMessage.message}</p>
        </>
      ) : null}
    </div>
  );
};

export default SignUp;