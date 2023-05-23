import React from "react";
import { Button } from "@mui/material";
import Logo from "../assest/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";



function Header(){
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Redirect to the login page
  };
  const handleRegister = () => {
    navigate("/register"); // Redirect to the registration page
  };
  return(
      <>
      <div className="Header-container">
          <div className="img1">
              <img src={Logo} alt="" width={'180px'} height={'50px'} />
          </div>
          <div className="items">
              <ul>
              <Button variant="contained" onClick={handleLogin}>
              Login
              </Button>
              <Button variant="contained" onClick={handleRegister}>
              Register
              </Button>
              </ul>
          </div>
      </div>
      <div className="search">
          <input type="text" name="" id="" placeholder="What are you looking for..."/>
          <button style={{backgroundColor:"rgb(97, 204, 26)"}}>Search</button>
          <button style={{backgroundColor:"#f14d54"}}>Cancel</button>
      </div>
      </>
  )
}

export default Header;