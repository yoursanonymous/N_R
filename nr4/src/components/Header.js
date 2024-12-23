import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo_container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav_items">
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>conatct us</li>
            <li>learn more</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;