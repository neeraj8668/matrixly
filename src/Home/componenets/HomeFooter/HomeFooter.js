import React from "react";
import logo from "../../../assets/logo/logo.svg";
const HomeFooter = () => {
  return (
    <div className="mt-10 md:mt-16 md:flex md:items-center md:justify-between">
      <img className="h-6 mb-4 md:h-9" src={logo} alt="matrixly logo" />
      <p className="text-sm">© 2023 Matrixly AI. All rights reserved.</p>
    </div>
  );
};

export default HomeFooter;
