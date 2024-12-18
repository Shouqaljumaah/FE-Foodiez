import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../api/storge";

function Nav() {
  //   const [user, setUser] = useState("");
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-300">
      <div className="max-w-7xl mx-auto px- m:px-6 lg:px-8">
        <div className="flex items-center  h-16 ">
          <div className="flex items-center ">
            <NavLink className="font-mono text-xl  text-gray-700" to={"/"}>
              Home
            </NavLink>

            <div className="navhead">
              <NavLink
                to={"/Categories"}
                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Categorise
              </NavLink>

              <NavLink
                to={"/Recipes"}
                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Recipes
              </NavLink>

              <NavLink
                to={"/Ingredients"}
                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Ingredients
              </NavLink>
              <NavLink to={"/Sginup"}>Sign up</NavLink>
              <NavLink to={"/Login"}>Login</NavLink>

              <button
                onClick={() => {
                  removeToken();
                  navigate("/");
                }}
                className="font-mono text-xl  text-gray-700"
              >
                {" "}
                Logout
              </button>

              <NavLink to="/login"></NavLink>
              <NavLink to="/register"></NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
