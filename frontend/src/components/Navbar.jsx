"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SignoutButton, SigninButton, SignupButton } from ".";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header>
      <nav className="bg-gray-900 text-white py-5 px-10 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ContactManager
        </Link>
        <ul className="flex space-x-4 items-center  justify-evenly">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contacts">My Contacts</Link>
          </li>
          <li>
            <Link href="/addContact" className="hover:text-gray-300">
              Add Contact
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link href="/profile" className="hover:text-gray-300">
                profile
              </Link>
            ) : (
              <span className="text-gray-400">profile</span>
            )}
          </li>
          <li>
            {!isLoggedIn ? (
              <div className="flex items-center gap-5">
                <SignupButton />
                <SigninButton />
              </div>
            ) : (
              <SignoutButton
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
