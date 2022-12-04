import React from "react";
import Logo from "../../assets/logo.png";

const LogoBar = () => {
  return (
    <div>
      <img src={Logo} alt="Ultimate Logo" className="h-12" />
    </div>
  );
};

export default LogoBar;
