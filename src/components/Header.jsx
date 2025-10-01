import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex items-center justify-between bg-pink-100 shadow-lg px-4 py-2 my-2 w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="h-12 w-auto max-w-[160px] object-contain"
        />
      </div>
      {/* Cart and Login (always visible) */}
      <div className="flex items-center gap-2">
        <Link
          to="/cart"
          className="px-4 py-2 bg-white border border-black rounded-lg font-bold text-base hover:bg-black hover:text-white transition"
        >
          Cart ({cartItems.length})
        </Link>
        <button
          className="px-4 py-2 bg-white border border-black rounded-lg font-bold text-base hover:bg-black hover:text-white transition"
          onClick={() =>
            setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {buttonNameReact}
        </button>
        {/* Hamburger menu for <=750px */}
        <div className="block md:hidden ml-2">
          <button
            className="p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Hamburger dropdown */}
          {menuOpen && (
            <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg z-50 min-w-[180px]">
              <ul className="flex flex-col p-4 gap-2 text-base">
                <li>Status: {onlineStatus ? "Online 🟢" : "Offline 🟥"}</li>
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/grocery" onClick={() => setMenuOpen(false)}>
                    Grocery
                  </Link>
                </li>
                <li className="font-bold">{loggedInUser}</li>
              </ul>
            </div>
          )}
        </div>
        {/* Desktop menu (hidden on <=750px) */}
        <nav className="hidden md:flex ml-4">
          <ul className="flex gap-4 items-center text-base">
            <li>Status: {onlineStatus ? "Online 🟢" : "Offline 🟥"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;