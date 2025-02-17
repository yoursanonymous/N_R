import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");
  const { loggedInUser } = useContext(userContext);
  const OnlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg bg-yellow-300 sm:bg-orange-400 lg:bg-green-400 dark:bg-slate-900">
      <div className="logo_container">
        <img className="w-545" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950">
            OnlineStatus:{OnlineStatus ? "yes" : "no"}
          </li>
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
            <Link to="/">home</Link>
          </li>
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
            <Link
              to="/about
          "
            >
              about us
            </Link>
          </li>
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
            <Link to="/contact">
            conatct us
            </Link>
          </li>
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
            <Link to="/grocery">grocery</Link>
          </li>
          <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
            learn more
          </li>
          <Link to="/cart">
            <li className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out">
              cart-({cartItems.length} items)
            </li>
          </Link>
          <button
            className="px-4 py-2 m-4 rounded-lg bg-gray-500 border-2 border-emerald-950 hover:w-24 ease-in-out"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <h4 className="m-4 text-green-400">user: {loggedInUser}</h4>
        </ul>
      </div>
    </div>
  );
};
export default Header;
