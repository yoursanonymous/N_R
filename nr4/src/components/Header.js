import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");
  
  const OnlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg bg-yellow-300 sm:bg-orange-400 lg:bg-green-400">
      <div className="logo_container">
        <img className="w-545" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px=4">OnlineStatus:{OnlineStatus?"yes":"no"}</li>
          <li className="px=4"><Link to="/">home</Link></li>
          <li className="px=4"><Link to="/about
          ">about us</Link></li>
          <li className="px=4">conatct us</li>
          <li className="px=4"><Link to="/grocery">grocery</Link></li>
          <li className="px=4">learn more</li>
          <li className="px=4">cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact ==="Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
