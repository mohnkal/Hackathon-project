import React, { useState } from "react";
import "./style.scss";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const data = {
        user_email: email,
        user_password: password,
        firstName: firstName,
        lastName: lastName,
      };

      const response = await axios.post("http://localhost:5000/user/signup", data);

      // Handle the response, e.g., store the token in local storage
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
    }
  };

  return (
    <div className="mainDiv">
      <div className="borderLine">
        <div className="textDetailsDiv">
          <h1>Create a new user</h1>
          <p className="description">
            It looks like you're new here. We need a bit more info to create
            your new account. Already have an account?{" "}
            <a href="/login" className="blueText">
              Login to get started.
            </a>
          </p>
        </div>
        <div className="emailBox">
          <label className="labelEmail" htmlFor="">
            Email<span className="redstar">*</span>
          </label>
          <br />
          <input
            className="inputbox"
            type="email"
            placeholder="Please enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="nameBox">
          <label className="labelEmail" htmlFor="">
            First name<span className="redstar">*</span>
          </label>
          <label className="labelLastName" htmlFor="">
            Last name<span className="redstar">*</span>
          </label>
          <br />
          <input
            className="nameInputBox"
            type="text"
            placeholder="Enter First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="lastNameInputBox"
            type="text"
            placeholder="Enter Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="passBox">
          <label className="labelPass" htmlFor="">
            Password<span className="redstar">*</span>
          </label>
          <br />
          <input
            className="inputbox"
            type="password"
            placeholder="Please enter password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <button className="submitButton" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
