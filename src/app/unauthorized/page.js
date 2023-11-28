import React from "react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">403</h1>
        <p className="text-xl text-gray-600 mb-8">
          You are not authorized to perform this action contact Admin
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
