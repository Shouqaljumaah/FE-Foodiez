import React, { useContext, useState } from "react";
import "./FoodiesBlog.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import LoginModal from "./LoginModal";

const SignUpModal = (props) => {
  const handleSubmit = (values) => {};
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      <div class="modal">
        <label class="modal__bg" for="modal-2"></label>
        <div class="modal__inner">
          <label
            onClick={() => {
              props.handleBtnCloseClicked();
            }}
            class="modal__close"
            for="modal-2"
          ></label>
          <h2>SignUp</h2>
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
                <label htmlFor="email">Email Address:</label>
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
          <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
          {/* {isSignUp ? <SignUpModal /> : <LoginModal />} */}

          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Login"
              : "No account? Create one"}
          </button>
        </div>
      </div>
      {/* <div
        className="forget-password"
        onClick={() => {
          setQuery("Sign Up");
        }}
      >
        Don't have an account? <span>Sign Up !</span>
      </div> */}
    </div>
  );
};

export default SignUpModal;
