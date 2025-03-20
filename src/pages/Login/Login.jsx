import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Login")
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Login"?<input type="text" placeholder='Enter Username' />:<></>}        
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder='Enter Password'/>
          <button>Login</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Login" ? 
          <p>New to Netflix? <span onClick={ () =>{setSignState("Register")}}>Register Now</span></p>
          :<p>Already have account? <span onClick={ () =>{setSignState("Login")}}>Login Now</span></p>
        }
        </div>
      </div>
    </div>
  )
}

export default Login