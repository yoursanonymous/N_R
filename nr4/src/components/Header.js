import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");
  
  const OnlineStatus=useOnlineStatus();
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav_items">
        <ul>
          <li>OnlineStatus:{OnlineStatus?"yes":"no"}</li>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about
          ">about us</Link></li>
          <li>conatct us</li>
          <li><Link to="/grocery">grocery</Link></li>
          <li>learn more</li>
          <li>cart</li>
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
