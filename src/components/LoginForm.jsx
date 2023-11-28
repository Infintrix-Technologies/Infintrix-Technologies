"use client";
import React from "react";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import PasswordField from "./PasswordField";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: true,
    });

    //   .then((resp) => {
    //     toast.success("Login successful");
    //   })
    //   .catch((err) => {
    //     toast.error("Failed to login");
    //   });
  };
  return (
    <div className="flex items-center justify-center min-h-fit">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-medium my-40">
        <div className="heading mb-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Login</h2>
          <p className="px-6 text-sm">
            Welcome back! Login to your account and continue sharing your
            valuable anonymous feedback
          </p>
        </div>
        <form>
          <div className="mb-4">
            <Input
              radius="full"
              value={email}
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <PasswordField
              label="Password"
              value={password}
              radius="full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between my-1 underline">
            <Link
              href="/signup"
              className="text-sm text-black hover:underline pb-1"
            >
              Create Account
            </Link>

            <Link
              href="/forget-password"
              className="text-sm text-black hover:underline pb-1"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            className="text-white bg-primary hover:opacity-75"
            radius="full"
            fullWidth
            size="md"
            // onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
