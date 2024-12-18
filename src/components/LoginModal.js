import React, { useContext, useState } from "react";
import "./FoodiesBlog.css";

import { Formik, Field, Form, ErrorMessage } from "formik";

const LoginModal = (props) => {
  const handleSubmit = (values) => {};
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
          <h2>Login</h2>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label htmlFor="username">username:</label>
                <Field type name="username" placeholder="Enter your username" />
                <ErrorMessage
                  name="username"
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
                <button type="submit">Login</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
