import CompaniesDropdown from "@/components/CompaniesDropdown";
import { authOptions } from "@/lib/auth";
import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center">
        <div className="bg-secondary absolute inset-0 z-0">
          {/* <Image
            className="opacity-20 md:opacity-100"
            src="/bg.jpg"
            alt="Background Image"
            layout="fill"
            priority
          /> */}
        </div>

        <div className="container mx-8 sm:mx-4 md:mx-80 my-8 md:my-24 text-center md:text-left h-80 flex flex-col justify-center">
          <div className="relative text-white sm:space-y-3">
            <h1 className="text-5xl md:text-5xl font-bold sm:leading-relaxed">
              Web And Mobile <br /> Development Solution
            </h1>
            <p className="text-base md:text-lg">
              Turning Imaginations to powerful solutions
            </p>
          </div>
          <Divider className="my-2 md:my-4" />
        </div>
        {/* Content */}
      </section>
      <section className="about">
        <div className="container mx-auto my-8 p-8 bg-white shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="md:col-span-1 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <p className="text-gray-700">
                Welcome to Infintrix Technologies, where innovation meets
                excellence in the world of web and mobile development.
                Established with a passion for crafting digital solutions that
                transcend expectations, we take pride in being your trusted
                partner on the journey to digital success. Who We Are: At
                Infintrix Technologies, we are a dynamic team of creative minds,
                tech enthusiasts, and problem solvers. Our company was founded
                with the vision of delivering cutting-edge web and mobile
                development services that empower businesses and individuals to
                thrive in the digital landscape. Our Mission: Our mission is to
                be at the forefront of technological advancements, providing our
                clients with bespoke solutions that not only meet their current
                needs but also anticipate and adapt to future challenges. We
                strive to build lasting relationships by delivering
                high-quality, scalable, and innovative solutions tailored to
                each client&apos;s unique requirements.
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio
              </p>
              <Button
                as={Link}
                href="/about"
                variant="bordered"
                radius="full"
                className="my-2"
              >
                Read More
              </Button>
            </div>
            <div className="md:col-span-1 p-4 rounded-md">
              <Image
                src="/about.jpg"
                alt="About Image"
                width={400}
                height={300}
                // objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
