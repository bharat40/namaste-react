import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Varibale - Super powerfull variable (useState)
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btns"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          ⭐Top Rated Restaurants
        </button>
        <button className="btns">
          <input type="text" id="search-inp" />
          🔍Search
        </button>
        <button className="btns">🌙Dark Mode</button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
