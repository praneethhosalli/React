import { applogo } from "../../utils/constance";
import { useState } from "react";
import { Link } from "react-router-dom";

import useOnline from "../../utils/useOnline";

export const Header = () => {
  const [btnname, setbtname] = useState("Login");

  const onlinestatus = useOnline();



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
            Online Status : {onlinestatus ? "🟢"   :  "🔴" }

          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
