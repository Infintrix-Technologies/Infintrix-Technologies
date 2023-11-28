import React from "react";

const Sidebar = () => {
  return (
    <div>
      {" "}
      <nav className="mt-4">
        <ul>
          {/* Dashboard Link */}
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Dashboard
            </a>
          </li>

          {/* Users Link */}
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Users
            </a>
          </li>

          {/* Products Link */}
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Products
            </a>
          </li>

          {/* Orders Link */}
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Orders
            </a>
          </li>

          {/* Settings Link */}
          <li className="mb-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
