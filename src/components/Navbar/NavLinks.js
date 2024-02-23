import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="text-black bg-blue-400 hover:bg-blue-300 inline-flex items-center justify-center w-auto px-10 py-3 shadow-xl rounded-xl"
        smooth
        to="/login"
      >
        Sign In
      </HashLink>
      <HashLink
        className="text-black bg-blue-400 hover:bg-blue-300 inline-flex items-center justify-center w-auto px-10 py-3 shadow-xl rounded-xl"
        smooth
        to="/login"
      >
        Onboard
      </HashLink>
    </>
  );
};

export default NavLinks;
