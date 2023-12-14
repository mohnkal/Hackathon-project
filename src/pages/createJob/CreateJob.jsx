import React from "react";
import "./style.scss";

const CreateJob = () => {
  return (
    <div className="formDiv">
      <div className="title">
        <h1>Post your Job Here</h1>
      </div>
      <div className="titleDiv">
        <label htmlFor="title">Title</label><br />
        <input type="text" name="" id="title" placeholder="Enter your Work Title"/>
      </div>
      <div className="descDiv">
        <label htmlFor="desc">Description</label><br />
        <input type="text" name="" id="desc" placeholder="Enter your Description"/>
      </div>
      <div className="amtDiv">
        <label htmlFor="amt">Amount offered</label><br />
        <input type="number" name="" id="amt" placeholder="Enter your Amount offered (in Rupees)"/>
      </div>
      <div className="timeDiv">
        <label htmlFor="time">Time period</label><br />
        <input type="number" name="" id="time" placeholder="Enter your Time period (in Days)"/>
      </div>
      <div className="submitBtnDiv">
        <button className="btnSubmit">Submit</button>
      </div>
    </div>
  );
};

export default CreateJob;
