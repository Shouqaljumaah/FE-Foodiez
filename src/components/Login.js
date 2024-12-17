import React from "react";
import { Formik } from "formik";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import { Form } from "react-router-dom";
const Login = () => {
  const handleSubmit = (values) => {};
  return (
    <div>
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
  );
};

export default Login;
