import React from "react";
import logo from "../logo.png";

const Home = () => {
  return (
    <div>
      <h1>Food Blog</h1>
      <p>Simple recipes made for real, actual, everyday life.</p>
      <img
        src={logo}
        className="end-px px-25 py-10 m-10 size-85 drop-shadow-[#314455]-2xl "
      ></img>
    </div>
  );
};

export default Home;
