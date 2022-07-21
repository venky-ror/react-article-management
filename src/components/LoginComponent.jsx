import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

const LoginComponent = ({ setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "xxxxx/api/v1/users/sign_in",
        {
          user: {
            email: email,
            password: password,
          },
        }
      );
      console.log(resp.data.message);
      console.log(resp.data.user);
      console.log(resp.headers.authorization);
      localStorage.setItem("token", JSON.stringify(resp.headers.authorization));
      resp.data.message === "You are logged in."
        ? setUser("Logged")
        : setUser("Not Logged");
      history.push("/articles");
    } catch (error) {
      console.log(error);
    }
  };
  if (user === "Logged") {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login-div">
      <form
        onSubmit={handleSubmit}
        className="my-5 d-flex flex-column  col-10 col-md-8 mx-auto p-5"
      >
        <label htmlFor="email" className="col-form-label my-2">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="my-3"
          type="email"
          placeholder="email"
          required
        />
        <label htmlFor="password" className="col-form-label my-2">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="my-3"
          type="password"
          placeholder="password"
          required
        />
        <button className="my-2 btn btndark" type="submit">
          Log in
        </button>
        <a className="text-decoration-none link-dark my-2" href="/signup">
          Sign up
        </a>
      </form>
    </div>
  );
};

export default LoginComponent;