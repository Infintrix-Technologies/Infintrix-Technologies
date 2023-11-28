"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
const PasswordField = (props) => {
  const { label, placeholder } = props;
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Input
        label="Password"
        radius="full"
        required
        labelPlacement="outside"
        placeholder="Enter Password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        {...props}
      />
    </>
  );
};

export default PasswordField;
