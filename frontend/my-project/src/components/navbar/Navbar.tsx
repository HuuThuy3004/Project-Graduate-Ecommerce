import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("English");

  return (
    <nav className="flex justify-between items-center col-span-5 p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-semibold italic">
        <p className="text-black">Logo.</p>
      </div>

      {/* Search Box */}
      <div className="relative flex items-center">
        <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-500"></i>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-16 py-2 border rounded-lg bg-gray-100 outline-none"
        />
      </div>

      {/* Language Dropdown + Buttons */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <button className="flex items-center gap-1 text-gray-700">
          {language}
          <i className="fa-solid fa-sort-down mb-1"></i>
        </button>

        {/* Login & Sign Up Buttons */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          <Link to="/sign-in">Sign In</Link>
        </button>
        <button className="border border-gray-400 text-purple-600 px-4 py-2 rounded-lg">
          <Link to="/sign-up">Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
