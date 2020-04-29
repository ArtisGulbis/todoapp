import React from "react";
import "./mainHeader.styles.scss";

const Header = ({ children }) => {
  return (
    <header className="main-header">
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
