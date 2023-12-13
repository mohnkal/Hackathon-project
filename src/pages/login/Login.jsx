import React,{useState} from 'react'
import "./style.scss";
import  axios  from 'axios';

import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/signin', {
        user_email: email,
        user_password: password,
      });

      // Handle the response, e.g., store the token in local storage
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
    }
  };

  return (
    <div className='Login'>
      <div className="borderline">
      <h1>Login</h1>
      <p className="text">Welcome back.If new? Create your account. <a href="/Signup" className='bluetext' >Signup to get started.</a> </p>
      <label className="labelEmail" htmlFor="">
          Email<span className="redstar">*</span>
        </label>
      <input type="email" placeholder='Please enter Email here' className='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>   
      <label className="labelPass" htmlFor="">
          Password<span className="redstar">*</span>
        </label>
      <input type="password" placeholder='Please enter Password here' className='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br/> <br />
      <button className='loginbtn' onClick={handleLogin}>Login</button> <br />
      <span className="or">OR</span> <br />
      <button className='icon'><FaGoogle />&nbsp;Login with Google</button>
      </div>
    </div>
  )
}

export default Login

