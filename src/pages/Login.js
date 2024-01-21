import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import sha256 from "js-sha256";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateEmail = () => {
    return email.includes("@");
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[\w!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const login = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      setErrorMessage(
        "Invalid password format, must be 8 Char long, should atleast contain 1 Capital letter,Small letter, Number and Special Character."
      );
      return;
    }

    const hashedPassword = sha256(password);

    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", hashedPassword);
    formData.append("grant_type", "password");

    axios
      .post("https://apiv2stg.promilo.com/user/oauth/token", formData, {
        headers: {
          Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
        },
      })
      .then((response) => {
        // console.log(response.data.response.access_token);
        localStorage.setItem("token", response.data.response.access_token);
        navigate("/home");
      })
      .catch((error) => {
        console.error("login Error", error);
      });
  };

  return (
    <div className="bg-red-200">
      <form className="login" action="login" onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-400">
          LOGIN
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;
