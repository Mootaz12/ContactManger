import Link from "next/link";
import React from "react";

const SignupButton = () => {
  return (
    <Link
      href="/signup"
      className="border border-green-500 px-2 py-1 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
    >
      Sign Up
    </Link>
  );
};

export default SignupButton;
