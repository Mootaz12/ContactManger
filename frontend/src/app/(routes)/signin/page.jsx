"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password === "") {
      alert("Please enter a password");
      return;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="emailInput"
          className="block text-gray-700 font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          placeholder="Email"
          required
        />

        <label
          htmlFor="passwordInput"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2 right-2 text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit"> Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
