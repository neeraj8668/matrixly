import React, { useState } from "react";
import Logo from "../../assets/logo/logo.png";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <header className="max-w-[1300px] mx-auto">
      <nav className="  text-[1rem]  pt-2  pb-4 sm:px-4 flex justify-between items-center">
        <div className="pl-4 mt-2">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 h-10 object-contain sm:w-auto sm:h-auto "
            />
          </Link>
        </div>
        <div className={` p-3 flex items-center md:w-[30%] justify-around`}>
          <div className="hidden md:inline-block mt-2 ">
            <Link to="/pricing" className="py-5 px-3 text-grayText ">
              Pricing
            </Link>
          </div>

          {!isSignedIn ? (
            <>
              <SignInButton afterSignInUrl={'/dashboard'} afterSignupUrl={'/dashboard'}>
                <button className="block py-2  px-4 mt-2  text-md text-grayText">
                  Login
                </button>
              </SignInButton>
              <SignUpButton  afterSignInUrl={'/dashboard'} afterSignupUrl={'/dashboard'}>
                <button className=" text-white bg-purple text-center rounded-lg mt-2  inline-block font-medium text-nowrap py-2 sm:py-3 px-5 sm:ml-8 sm:px-8">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          ) : (
            <>
              <button className="bg-dark text-white text-center rounded-lg font-medium  py-2 px-5 md:px-8 sm:py-3 sm:mr-6">
                <Link to="/dashboard">Dashboard</Link>
              </button>
              <div className="hidden sm:block">
                <UserButton afterSignOutUrl="/" />
              </div>{" "}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
