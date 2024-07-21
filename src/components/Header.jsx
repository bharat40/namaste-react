import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// Link dont reload whole page but instead replace the component

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header Rendered");
  // if no dependency array then useEffect is rendered after every component render
  // if dependency array is empty then useEffect is called on initial component render(just once)
  // if dependency array contains a dependency then useEffect is called on every dependency change
  // useEffect(() => {
  //   console.log("useEffect is called");
  // }, [btnName]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between border-b">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center gap-8 font-semibold">
          <li className="px-4 w-28 flex gap-1">
            status:{" "}
            {onlineStatus ? (
              <p className="text-green-600">online</p>
            ) : (
              <p className="text-red-600">offline</p>
            )}
          </li>
          <li className="px-3 py-1 hover:text-indigo-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3 py-1 hover:text-indigo-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-3 py-1 hover:text-indigo-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-3 py-1 hover:text-indigo-500">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-3 py-1 hover:text-indigo-500">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <Link to={"/login"}>
            <button
              className="px-4 py-1 bg-indigo-500 m-2 rounded-lg text-white font-semibold hover:bg-indigo-400"
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
          </Link>
          <li className="px-3 py-1">
            <span className="font-semibold">User:</span> {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
