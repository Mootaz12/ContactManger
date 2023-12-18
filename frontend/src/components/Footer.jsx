import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-gray-200 p-4">
      <p className="text-sm text-gray-600">
        All Rights Reserved &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
