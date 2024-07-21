import { Form, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const LoginPage = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div className="my-28">
      <div className="m-4 p-4 flex items-center gap-6 justify-center">
        <h2 className="font-semibold text-2xl">Enter username:</h2>
        <input
          type="text"
          className="px-4 py-1 text-center border border-solid border-gray-300 rounded-lg focus:border-blue-600 outline-none"
          value={loggedInUser}
          placeholder="default"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button className="px-4 py-1 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-400">
          Submit
        </button>
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="px-4 py-1 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-400">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
