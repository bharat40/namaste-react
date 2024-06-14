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
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
      </a>
    </div>
  );
};

export default RestaurantCard;
