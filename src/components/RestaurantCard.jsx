import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <a href="https://bharat40.github.io/FOODNOOK-restaurant/">
        <img
          alt="res-logo"
          className="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating} stars</h6>
        <h6>{costForTwo}</h6>
      </a>
    </div>
  );
};

export default RestaurantCard;
