import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Register.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3030/users", values) 
      .then((response) => {
        toast.success("Registration successful!");
        console.log(response.data);
        navigate("/login"); // Redirect to the login page
      })
      .catch((error) => {
        console.error(error);
        toast.warning("Registration failed!");
        // Handle registration error here
      });
  };
  const handleLogin = () => {
    navigate("/login"); // Redirect to the login page
  };
  return (
    <>
      <Header />
      <div className="register-container">
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="name-container">
              <div>
                <Field
                  type="text"
                  name="firstName"
                  as={TextField}
                  label="First Name"
                  variant="standard"
                  color="secondary"
                  required                
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div>
                <Field
                  type="text"
                  name="lastName"
                  as={TextField}
                  label="Last Name"
                  variant="standard"
                  color="secondary"
                  required
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
            </div>
            <div className="email-container">
              <Field
                type="email"
                name="email"
                as={TextField}
                label="Email"
                variant="standard"
                color="secondary"
                required
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="password-container">
              <div>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  as={TextField}
                  label="Password"
                  variant="standard"
                  color="secondary"
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
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  as={TextField}
                  label="Confirm Password"
                  variant="standard"
                  color="secondary"
                  required
                />
                <ErrorMessage name="confirmPassword" component="div" />
              </div>
            </div>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Register
            </Button>
            <div className="login-button">
              <label>already user ?</label>
              <Button variant="contained" type="submit" onClick={handleLogin} className="login-button">
                Login
              </Button>
            </div>
          </Form>
        </Formik>
        <ToastContainer position="top-center" theme="colored" />
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
