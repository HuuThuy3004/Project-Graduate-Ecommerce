import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className="col-span-5">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        {/* Logo */}
        <p className="text-black text-2xl font-semibold italic">Logo.</p>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-600 font-medium">
          <Link to="/" className="text-black font-semibold">
            Home
          </Link>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none"
            />
          </div>
          <div className="icon-bg">
            <i className="fa-regular fa-heart icon"></i>
          </div>
          <div className="icon-bg">
            <i className="fa-regular fa-user icon"></i>
          </div>
          <div className="icon-bg">
            <i className="fa-solid fa-cart-shopping icon"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
