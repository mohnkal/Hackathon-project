import React from "react";
import "./style.scss";

const Signup = () => {
  return (
    <div className="mainDiv">
      <div className="borderLine">
        <div className="textDetailsDiv">
          <h1>Create a new user</h1>
          <p className="description">
            It looks like you're new here. We need a bit more info to create
            your new account. Already have an 
            account?{" "}
            <a href="/login" className="blueText">
              {" "}
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
            placeholder="Please enter email here"
          />
          <input
            className="lastNameInputBox"
            type="text"
            placeholder="Enter Last name"
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
          />
        </div>
        <div className="button">
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
