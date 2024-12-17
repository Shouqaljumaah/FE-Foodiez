import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../api/storge";

function Nav() {
  //   const [user, setUser] = useState("");
  const navigate = useNavigate();

  const applyNavClass = ({ isActive }) => {
    return isActive ? "nav-link-active" : "";
  };

  return (
    <nav>
      <div className="navhead">
        <NavLink className={applyNavClass} to={"/"}>
          Home
        </NavLink>

        <div className="navhead">
          <NavLink to={"/Categories"} className={applyNavClass}>
            Categorise
          </NavLink>

          <NavLink to={"/Recipes"} className={applyNavClass}>
            Recipes
          </NavLink>

          <NavLink to={"/Ingredients"} className={applyNavClass}>
            Ingredients
          </NavLink>
          <NavLink to={"/Sginup"} className={applyNavClass}>
            Sign up
          </NavLink>
          <NavLink to={"/Login"} className={applyNavClass}>
            Login
          </NavLink>

          <button
            onClick={() => {
              removeToken();
              navigate("/");
            }}
          >
            {" "}
            Logout
          </button>

          <NavLink to="/login"></NavLink>
          <NavLink to="/register"></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
