"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { websiteNavbar } from "@/lib/nav";
import MobileMenu from "./MobileMenu";
export default function WebsiteNavbar() {


  return (
    <>
      <div className="sm:hidden">
        <div className="flex px-4 justify-between">
          <div>
            <MobileMenu />
            </div>
            <div className="flex" style={{width: "185px", height: "auto"}}>
            <Link href='/'>
            <img src="/logo.png" alt="" />
            </Link>
            </div>

          
          <Button
            className="rounded-full uppercase mt-2 text-white"
            as={Link}
            color="secondary"
            href="/contact"
          // variant="flat"
          >
            Qet Quote
          </Button>
        </div>

      </div>
      <div className="flex flex-col">
      <Navbar className="hidden sm:flex">
        <NavbarContent>
          <Link href="/" className="pr-8">
            <NavbarBrand>
              <Image alt="kindly" src="/logo.png" width={180} />
            </NavbarBrand>
          </Link>

        </NavbarContent>

        <NavbarContent className='sm:flex gap-8 sm:justify-center'>
          {websiteNavbar.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
                className="rounded-lg"
                as={Link}
                href={item.link}
                variant="light"
              >
                {item.name}
              </Link>
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
      </Navbar>
      </div>


    </>
  );
}
