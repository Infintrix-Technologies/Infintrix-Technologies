"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Link
} from "@nextui-org/react";
// import Link from "next/link";
import { websiteNavbar } from "@/lib/nav";
export default function WebsiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <Navbar>
        <NavbarContent onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
          <Link href="/">
            <NavbarBrand>
              <Image alt="kindly" src="/logo.png" width={140} />
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {websiteNavbar.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Button
                className=" rounded-lg"
                as={Link}
                href={item.link}
                variant="light"
              >
                {item.name}
              </Button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="text-white">
            <Button
              className="rounded-full uppercase"
              as={Link}
              color="secondary"
              href="/contact"
              // variant="flat"
            >
              Qet Quote
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {websiteNavbar.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link className="w-full" href={item.link} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      
    </>
  );
}
