import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Header(){
    return(
        <>

        <h6>Header Work</h6>
        <Button variant="contained"><Link to="/login">Login</Link></Button>
        <Button variant="contained"><Link to="/register">Register</Link></Button>
        </>
    );
}
export default Header;