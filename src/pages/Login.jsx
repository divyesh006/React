import React, { useState } from "react";
//import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Login Or Create Account</h1> <br />
        <h4>Registered Customer</h4>
        <form>
          <div>
            <TextField
              id="outlined-secondary-email"
              type="email"
              label="Email Address"
              variant="outlined"
              color="secondary"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <br />
          </div>
          <div>
            <TextField
              id="outlined-secondary-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              color="secondary"
              value={password}
              onChange={handlePasswordChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handlePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <br />
          </div>
          <div>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </form>
        <br />
        {error && <p>{error}</p>}
        <div>
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};
export default Login;
