import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("🔓Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>🏠Home</li>
          <li>👥About Us</li>
          <li>📞Contact Us</li>
          <li>🛒Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              if (btnName === "🔓Login") {
                setBtnName("🔒Logout");
              } else {
                setBtnName("🔓Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
