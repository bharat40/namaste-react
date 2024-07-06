import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Shimmer from "./Shimmer";

const Body = () => {
  // theme
  const [theme, setTheme] = useState("🌚Dark Mode");
  // useState is used to create local state variable inside your functional component
  // State Varibale - Super powerfull variable (useState)
  // whenever we change local state variable react re-render the component
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3610314&lng=76.8485468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3610314&lng=76.8485468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering -> rendering according to a condition
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter restaurant cards and update the UI
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            ⌕
          </button>
        </div>

        {/* <button
          className="theme-btn"
          onClick={() => {
            if (theme === "🌚Dark Mode") {
              setTheme("🌞Light Mode");
            } else {
              setTheme("🌚Dark Mode");
            }
          }}
        >
          {theme}
        </button> */}
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
