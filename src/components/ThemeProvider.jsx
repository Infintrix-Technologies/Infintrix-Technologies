"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const ThemeProvider = ({ children }) => {
  return (
    <>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">{children}</main>
      </NextUIProvider>
    </>
  );
};

export default ThemeProvider;
