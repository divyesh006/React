import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Button,TextField} from "@mui/material";

function Register(){
    return(
        <>
        <Header/>
        <h1>Login Or Create Account</h1>
        <br/>
        <h4>Personal Information</h4>
        <TextField id="Outlined secondary" label="First Name" variant="outlined" color="secondary"/>
        <TextField id="Outlined secondary" label="Last Name" variant="outlined" color="secondary"/>
        <TextField id="Outlined secondary" label="Email Address" variant="outlined" color="secondary"/>
        <h4>Login Information</h4>
        <TextField id="oOutlined secondary" label="Password" variant="outlined" color="secondary"/>
        <TextField id="Outlined secondary" label="Confirm Password" variant="outlined" color="secondary"/>
        <br/><br/>
        <Button variant="contained">Register</Button>
        <br/><br/>
        <Link to="/productlist">ProductList</Link>
        <br/>
        <Footer/>
        </>
    );

}

export default Register;