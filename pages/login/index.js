"use client";
import { useState } from "react";
import { PasswordInput } from "../../components/passwordInput";
export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50">
      <div className="relative flex flex-colum m-6 space-y-10 bg-white-shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left-side */}
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to start learning now
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full p-3 border mb-2 border-blue-300 focus:border-blue-500 rounded-md 
                  placeholder:font-sans placeholder:font-light"
          />
          <PasswordInput />
          <button class=" font-mono w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <span>Login</span>
          </button>
        </div>
        {/* Right Side */}
        <img
          src="img/benefit-two.png"
          alt="login"
          className="w-[430px] hidden md:block "
        />
      </div>
    </div>
  );
}
