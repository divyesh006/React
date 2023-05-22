import React,{useState} from "react";
//import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Button,TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
        const [email,setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState("");
        const navigate = useNavigate();

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        };
        
        const handleLogin = () => {
            if (email === "" || email === "null") {
              toast.warning("Please enter email");
            } else if (password === "" || password === "null") {
              toast.warning("Please enter password");
            } else {
              axios
                .get("http://localhost:3030/users", {
                  params: { email, password },
                })
                .then((response) => {
                  console.log(response.data);
                  if (response.data.length > 0) {
                    // Successful login
                    toast.success("Login successful!");
                    navigate("/productlist"); // Redirect to the dashboard page
                  } else {
                    // Failed login
                    setError("Invalid email or password");
                    toast.error("Invalid email or password");
                  }
                })
                .catch((error) => {
                  console.error(error);
                  // Failed login
                  setError("Invalid email or password");
                  toast.error("Invalid email or password");
                });
            }
          };
        const handleRegister = () => {
            navigate("/register"); // Redirect to the registration page
        };
    return(
        <>
        <Header/>
        <div className="login-container">
        <h1>Login Or Create Account</h1> <br/>
        <h4>Registered Customer</h4>
        <form>
        <TextField id="outlined-secondary-email"
                    type="email" 
                    label="Email Address" 
                    variant="outlined" 
                    color="secondary" 
                    value={email}
                    onChange={handleEmailChange} 
                    required />
        <br/><br/>
        <TextField id="outlined-secondary-password" 
                    type="password"
                    label="Password" 
                    variant="outlined" 
                    color="secondary" 
                    value={password}
                    onChange={handlePasswordChange} required/>
        <br/><br/>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        </form>
        <br/>
        {error && <p>{error}</p>}
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
        </div>
        <Footer/>
        <ToastContainer position="top-center" theme="colored"/> 
        </>
        );
    };
export default Login;