import Header from "@/components/Header";
import React from "react";

const paage = () => {
  return (
    <>
      <Header
        pageTitle={`About Us`}
        pageDescription={` Welcome to Infintrix Technologies, where innovation meets excellence
        in the world of web and mobile development.`}
      />
      <div className="flex justify-center">
        <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
          {/* Mission Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to be at the forefront of technological
              advancements, providing our clients with bespoke solutions that
              not only meet their current needs but also anticipate and adapt to
              future challenges.
            </p>
          </section>

          {/* What Sets Us Apart Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">
                Expertise: Our team comprises skilled professionals with a
                diverse range of expertise in web and mobile development
                technologies.
              </li>
              <li className="text-gray-700">
                Client-Centric Approach: Your success is our priority. We
                believe in fostering collaborative partnerships with our
                clients.
              </li>
              <li className="text-gray-700">
                Innovation: Innovation is the heartbeat of our company. We
                embrace creativity and out-of-the-box thinking.
              </li>
            </ul>
          </section>

          {/* Services Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-200 rounded-md">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-700">
                  From responsive websites to complex web applications.
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-md">
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-gray-700">
                  Crafting native and cross-platform mobile applications.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <p className="text-gray-700">
              Join us on the digital journey. Embark on a transformative digital
              journey with Infintrix Technologies.
            </p>
            <p className="text-gray-700">Let us be your technology partner.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default paage;
