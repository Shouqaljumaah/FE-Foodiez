import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupLogin from "./components/SignupLogin";
import Home from "./components/Home";
import Nav from "./components/Nav";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Catagory from "./components/Catagory";
import Recipes from "./components/Recipes";
import Ingredients from "./components/Ingredients";
import Favourite from "./components/Favourite";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryCliet = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <SignupLogin />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Catagory />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Recipes />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Ingredients />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Favourite />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliet}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
