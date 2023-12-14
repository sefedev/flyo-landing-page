import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between px-4 py-8 text-xs lg:text-base">
      <div>
        <img src="./assets/logo.svg" alt="Flyo Logo" width={96} />
      </div>
      <ul className="flex items-center gap-4 text-gray-300 font-heading lg:gap-8">
        <li>
          <a href="" className="hover:border-b hover:text-white">
            Features
          </a>
        </li>
        <li>
          <a href="" className="hover:border-b hover:text-white">
            Team
          </a>
        </li>
        <li>
          <a href="" className="hover:border-b hover:text-white">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
