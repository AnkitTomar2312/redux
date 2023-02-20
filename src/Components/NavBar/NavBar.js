import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <span>Your Current balance is</span>
      <h1>{amount}</h1>
    </div>
  );
};

export default NavBar;
