import React, { useContext, useState } from "react";
import "./SignupLogin.css";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { register } from "../api/auth";

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
