import Link from "next/link";
import React from "react";

const SigninButton = () => {
  return (
    <Link
      href="/signin"
      className="border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
    >
      Sign In
    </Link>
  );
};

export default SigninButton;
