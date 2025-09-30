import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="flex justify-between bg-pink-100 shadow-lg m-4">
      <div className="logo-container">
        <img className="w-26" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Status:{onlineStatus ? " Online 🟢" : " Offline 🟥"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login border border-solid border-black px-4 py-2 bg-white rounded-lg hover:bg-black hover:text-white"
            onClick={() => {
              buttonNameReact === "Login"
                ? setButtonNameReact("Logout")
                : setButtonNameReact("Login");
            }}
          >
            {buttonNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
