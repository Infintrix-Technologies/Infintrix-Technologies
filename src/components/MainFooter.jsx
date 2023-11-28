import React from "react";
import Link from "next/link";
const MainFooter = () => {
  return (
    <footer className="bg-secondary text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <small>
            &copy; 2023{" "}
            <Link className="font-bold" href={"https://infintrixtech.com"}>
              Infintrix.
            </Link>{" "}
            All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
