import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter Username and Password");
      return;
    }

    onLogin();
  };

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={handleSubmit}>

        <h1>SuperMart</h1>

        <h3>Login</h3>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;