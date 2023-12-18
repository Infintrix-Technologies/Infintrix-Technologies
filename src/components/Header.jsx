import React from "react";

const Header = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <div class="bg-primary px-6 py-12 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {pageTitle}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">{pageDescription}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
