import React from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantCard = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold m-4">Restaurant Name</h1>
      <RestaurantCategory />
    </div>
  );
};

export default RestaurantCard;
