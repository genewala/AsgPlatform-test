import React, { useState } from "react";
import users from "./user";
import ContactList from "../Components/ContactList";
import ControlPanel from "../Components/ControlPanel";
import Interface from "../Components/Interface";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      {loggedIn ? (
        <p> <Interface/> </p>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
