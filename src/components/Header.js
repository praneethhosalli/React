import { applogo } from "../../utils/constance";
import { useState } from "react";

export const Header = () => {
  const [btnname, setbtname] = useState("Login");

  return (
    <div className="Header">
      <div className="Logo-container">
        <img className="Logo" src={applogo} />
      </div>

      <div className="Nav_items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <button
            className="header-button"
            onClick={() => {
                btnname === "Login"?
              setbtname("Logout"): setbtname("Login") ;
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
