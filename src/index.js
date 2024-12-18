import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";

import Favourite from "./components/Favourite";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryCliet = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "/Categories",
    element: (
      <div>
        <Nav />
        <Categories />
      </div>
    ),
  },

  {
    path: "/Favourite",
    element: (
      <div>
        <Nav />
        <Favourite />
      </div>
    ),
  },
  {
    path: "/Recipes",
    element: (
      <div>
        <Nav />
        <Recipes />
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
