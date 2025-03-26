import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase.js";
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      if(email===""){
        await login("guest123@gmail.com", "Guest@12345", navigate);
      }else{
        await login(email, password, navigate);
      }
      
    } else {
      await signup(name, email, password, navigate);
    }
    setLoading(false);
  };

  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> : 
    <div className="login">
      <img src={logo} className="login-logo" alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" />
          )}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

          <button onClick={userAuth}>{signState}</button>

          {signState === "Sign In" && (
            <button onClick={userAuth} className="guest-login">Guest Login</button>
          )}

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
