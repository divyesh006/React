import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Button,TextField} from "@mui/material";

function Login(){
    return(
        <>
        <Header/>
        <h1>Login Or Create Account</h1> <br/>
        <h4>Registered Customer</h4>
        <TextField id="Outlined secondary" label="Email Address" variant="outlined" color="secondary" /> <br/><br/>
        <TextField id="Outlined secondary" label="Password" variant="outlined" color="secondary"/>
        <br/><br/>
        <Button variant="contained">Login</Button>
        <br/>
        <Footer/>
        </>
    );
}
export default Login;