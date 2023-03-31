import React, { useState } from "react";
import RememberMe from './RememberMe';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1 className="heading">Login</h1><br/>
    <div className="border">
      <label>
        Username or email address *
        <br/><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label><br/>
      <label>
        Password *
        <br/><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label><br/>
      <RememberMe />
      <button type="submit">Login</button>
    </div>
    </form>
  );
}

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1 className="heading">Register</h1><br/>
    <div className="border">
      <label>
        Email address *
        <br/><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="label">
        Password:
        <br/><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label><br/>
      <button type="submit">Register</button>
    </div>
    </form>
  );
}

export { Login, Register };
