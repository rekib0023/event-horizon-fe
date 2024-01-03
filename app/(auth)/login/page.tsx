"use client";

import InputField from "@components/InputField";
import PasswordInput from "@components/PasswordInput";
import { login } from "@services/authService";
import { showToastMessage } from "@utils/toaster";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      console.log(response);
      showToastMessage("success", "Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      showToastMessage("error", "Login failed");
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Event Horizon
          </h1>
          <form className="mt-6" onSubmit={handleLogin}>
            <InputField
              label="Email"
              type="email"
              id="email"
              margin="mb-4"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <PasswordInput
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Link
              href="/forget"
              className="text-xs text-gray-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
