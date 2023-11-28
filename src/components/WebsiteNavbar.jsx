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
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import ProfileInfo from "./ProfileInfo";
import { staffNavbar, websiteNavbar } from "@/lib/nav";
import { usePathname } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function WebsiteNavbar() {
  let menuItems;
  const session = undefined;

  menuItems = websiteNavbar;

  return (
    <>
      <Navbar>
        <NavbarContent>
          <NavbarMenuToggle className="sm:hidden text-secondary" />
          <Link href="/">
            <NavbarBrand>
              <Image alt="kindly" src="/logo.png" width={140} />
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
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
              className="rounded-full"
              as={Link}
              color="secondary"
              href="/estimate"
              // variant="flat"
            >
              Estimate Project
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
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
