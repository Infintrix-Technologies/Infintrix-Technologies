"use client";
import React from "react";
import {
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
const ProfileInfo = () => {
  // const { data: session } = useSession();
  const session = undefined;

  return (
    <>
      <NavbarContent as="div" justify="end" className="cursor-pointer">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              name={session?.user?.details?.name}
              //   description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session?.user?.details?.email}</p>
            </DropdownItem>
            <DropdownItem
              // onClick={() => signOut()}
              key="logout"
              color="danger"
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </>
  );
};

export default ProfileInfo;
