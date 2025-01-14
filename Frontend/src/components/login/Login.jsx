import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./Login.css"

const Login = ({setshowlogin}) => {
     const[currState,setcurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className='login-popup-contain'>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="email" placeholder='Your E-mail' required />
            <input type="password" placeholder='Password' required />
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy. </p>
          </div>

          {currState==="Sign Up"
          ?<p>Already have an Account? <span onClick={() => setcurrState("Login")}>Login Here</span></p>
          :<p>Create a new Account? <span onClick={() => setcurrState("Sign Up")}>Click Here</span></p>}
           
        </form>
    </div>
  )
}

export default Login
