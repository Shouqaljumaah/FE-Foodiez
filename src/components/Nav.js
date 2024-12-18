import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../api/storge";
import SignUpModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const applyNavClass = ({ isActive }) => {
    return isActive ? "nav-link-active" : "";
  };

  const handleBtnCloseClicked = () => {
    setShowSignupModal(false);
  };
  const handleBtnCloseClickedLogin = () => {
    setShowLoginModal(false);
  };

  return (
    <>
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

            <NavLink
              className={applyNavClass}
              onClick={() => {
                setShowSignupModal(!showSignupModal);
              }}
            >
              Sign up
            </NavLink>
            <NavLink
              className={applyNavClass}
              onClick={() => {
                setShowLoginModal(!showLoginModal);
              }}
            >
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
            <NavLink to="/sginUp"></NavLink>
          </div>
        </div>
      </nav>
      {showSignupModal && (
        <SignUpModal handleBtnCloseClicked={handleBtnCloseClicked} />
      )}
      {showLoginModal && (
        <LoginModal handleBtnCloseClicked={handleBtnCloseClickedLogin} />
      )}
    </>
  );
}

export default Nav;
