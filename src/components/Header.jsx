import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// Link dont reload whole page but instead replace the component

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");
  // if no dependency array then useEffect is rendered after every component render
  // if dependency array is empty then useEffect is called on initial component render(just once)
  // if dependency array contains a dependency then useEffect is called on every dependency change
  useEffect(() => {
    console.log("useEffect is called");
  }, [btnName]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>🏠Home</Link>
          </li>
          <li>
            <Link to={"/about"}>👥About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>📞Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>🛍️Grocery</Link>
          </li>
          <li>
            <Link to={"/cart"}>🛒Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
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
