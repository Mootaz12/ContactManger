import Link from "next/link";
import React from "react";

const SignoutButton = ({ setIsLoggedIn }) => {
  const handleClick = () => {
    setIsLoggedIn((prev) => false);
  };
  return (
    <Link
      href="/"
      className="border border-red-500 px-2 py-1 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
      onClick={handleClick}
    >
      Sign Out
    </Link>
  );
};

export default SignoutButton;
