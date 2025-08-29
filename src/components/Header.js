import { applogo } from "../../utils/constance";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnname, setbtname] = useState("Login");

  return (
    <div className="Header">
      <div className="Logo-container">
        <Link to="/">
          <img className="Logo" src={applogo} />
        </Link>
      </div>

      <div className="Nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>

          <button
            className="header-button"
            onClick={() => {
              btnname === "Login" ? setbtname("Logout") : setbtname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
