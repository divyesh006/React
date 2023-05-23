import React from "react";
import Logo from "../assest/logo.png";
import "./Footer.css";

function Footer(){
    return(
        <>
        <div className="Footer-container">
            <img src={Logo} alt="logo" height={"50px"} width={"180px"}/>
            <p>© 2016 Tatvasoft.com all rights reserved</p>
        </div>
        </>
    );
}
export default Footer;