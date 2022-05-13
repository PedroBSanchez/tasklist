import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <h1 className="header">
      {children} <hr className="hr" />
    </h1>
  );
};

export default Header;
