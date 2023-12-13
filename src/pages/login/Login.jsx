import React from 'react'
import "./style.scss";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    
  return (
    <div className='Login'>
      <div className="borderline">
      <h1>Login</h1>
      <p className="text">Welcome back.If new? Create your account. <a href="/Signup" className='bluetext' >Signup to get started.</a> </p>
      <label className="labelEmail" htmlFor="">
          Email<span className="redstar">*</span>
        </label>
      <input type="email" placeholder='Please enter Email here' className='email'/> 
      <label className="labelPass" htmlFor="">
          Password<span className="redstar">*</span>
        </label>
      <input type="password" placeholder='Please enter Password here' className='password'/> <br/> <br />
      <button className='loginbtn'>Login</button> <br />
      <span className="or">OR</span> <br />
      <button className='icon'><FaGoogle />&nbsp;Login with Google</button>
      </div>
    </div>
  )
}

export default Login

