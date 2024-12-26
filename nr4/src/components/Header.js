import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnReact] = useState("Login");
  console.log("headderrr");
  useEffect(()=>{
    console.log("useEffect Called")
  },[btnNameReact])
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} />
      </div>


      <div className="nav_items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>conatct us</li>
          <li>learn more</li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login");
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
