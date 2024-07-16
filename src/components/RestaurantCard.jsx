import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <Link to="/menu">
      <div className="m-4 p-4 w-56 shadow-2xl rounded-lg h-[450px]">
        <img
          alt="res-logo"
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h6 className="text-slate-500">{cuisines.join(", ")}</h6>
        <h6 className="text-slate-500">{avgRating} stars</h6>
        <h6 className="text-slate-500">{costForTwo}</h6>
      </div>
    </Link>
  );
};

export default RestaurantCard;
