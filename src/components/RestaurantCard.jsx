import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-56 border shadow-lg rounded-lg h-max bg-gray-100 hover:bg-gray-200"
    >
      <img
        alt="res-logo"
        className="rounded-md"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h6 className="text-slate-500">{cuisines.join(", ")}</h6>
      <h6 className="text-slate-500">{avgRating} stars</h6>
      <h6 className="text-slate-500">{costForTwo}</h6>
      <Link to={"/menu"} className="hover:underline text-blue-600">
        Go to menu
      </Link>
    </div>
  );
};

export default RestaurantCard;
