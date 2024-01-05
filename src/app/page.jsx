import HomepageHero from "@/components/HomepageHero";
import Testimonials from "@/components/Testimonials";
// import { authOptions } from "@/lib/auth";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import ServicesPage from "./services/page";
import ContactForm from "./contact/page";
import Header from "@/components/Header";
import Technologies from "./technology/page";
import CompanyInfo from "@/components/CompanyInfo";
import TestimonialSection from "@/components/Testimonials";
export default async function Home() {
  return (
    <>
      <HomepageHero />
      <section className="about">
        <div className="container mx-auto mt-8 p-8 bg-white shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2> */}
          <div className="">
            <h3 className="text-4xl font-bold mb-2 text-center">About Us</h3>
            <div className="flex flex-col-reverse sm:flex-row p-4">
              <div className="about-content">
                <p className="text-gray-700">
                  Welcome to Infintrix Technologies, where innovation meets
                  excellence in the world of web and mobile development.
                  Established with a passion for crafting digital solutions that
                  transcend expectations, we take pride in being your trusted
                  partner on the journey to digital success.
                </p>
                <h3 className="font-bold text-xl">Who We Are: </h3>
                <p>
                  At Infintrix Technologies, we are a dynamic team of creative
                  minds, tech enthusiasts, and problem solvers. Our company was
                  founded with the vision of delivering cutting-edge web and
                  mobile development services that empower businesses and
                  individuals to thrive in the digital landscape.
                </p>
                <h3 className="font-bold text-xl">Our Mission:</h3>
                <p>
                  Our mission is to be at the forefront of technological
                  advancements, providing our clients with bespoke solutions
                  that not only meet their current needs but also anticipate and
                  adapt to future challenges. We strive to build lasting
                  relationships by delivering high-quality, scalable, and
                  innovative solutions tailored to each client&apos;s unique
                  requirements.
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

              <div className="p-4 rounded-md max-w-md">
                <Image
                  src="/images/about-image.jpg"
                  alt="About Image"

                  // layout="responsive"
                  // objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <CompanyInfo/>
      </section>
      <ServicesPage/>
      <Technologies/>
      <TestimonialSection/>
      <ContactForm/>
    </>
  );
}
