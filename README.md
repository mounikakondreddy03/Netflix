# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



// import React, { useState } from "react";
// import { auth, googleProvider } from "../../components/Authrentication/Authentication"
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInAnonymously } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./login.css"
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);
//   const navigate = useNavigate();

//   const handleAuth = async (e) => {
//     e.preventDefault();
    
//     try {
//       if (isRegister) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         toast.success("Account created successfully!");
//         // navigate("/")
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success("Logged in successfully!");
//         // navigate("/Home")
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       toast.success("Logged in with Google!");
//       // navigate("/home")
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGuestLogin = async () => {
//     try {
//       await signInAnonymously(auth);
//       toast.success("Logged in as Guest!");
//       navigate("/Home")
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isRegister ? "Register" : "Login"}</h2>
//       <form onSubmit={handleAuth}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">{isRegister ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={handleGoogleSignIn}>Continue with Google</button>
//       <button onClick={handleGuestLogin}>Login as Guest</button>
//       <p onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Already have an account? Login" : "New user? Register"}</p>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Login


