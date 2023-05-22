import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();

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
      .post("http://localhost:3030/users", values) // Adjust the endpoint URL according to your backend
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
              <label>First Name:</label>
              <Field
                type="text"
                name="firstName"
                as={TextField}
                label="First Name"
                variant="outlined"
                color="secondary"
                required
              />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label>Last Name:</label>
              <Field
                type="text"
                name="lastName"
                as={TextField}
                label="Last Name"
                variant="outlined"
                color="secondary"
                required
              />
              <ErrorMessage name="lastName" component="div" />
            </div>
          </div>
          <div>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              color="secondary"
              required
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="password-container">
          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              as={TextField}
              label="Password"
              variant="outlined"
              color="secondary"
              required
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <Field
              type="password"
              name="confirmPassword"
              as={TextField}
              label="Confirm Password"
              variant="outlined"
              color="secondary"
              required
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          </div>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Register
          </Button>
          <label>already user ?</label>
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Formik>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default RegisterForm;
