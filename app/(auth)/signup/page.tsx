"use client";

import InputField from "@components/InputField";
import PasswordInput from "@components/PasswordInput";
import { signup } from "@services/authService";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signup({
        userName,
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Event Horizon
        </h1>
        <form className="mt-6" onSubmit={handleSignup}>
          <InputField
            label="Username"
            type="text"
            id="userName"
            margin="mb-4"
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
          <div className="flex justify-between gap-4 mb-4">
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
            <InputField
              label="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>
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
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
