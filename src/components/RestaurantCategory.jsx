import RecommendedList from "./RecommendedList";
import NonVegList from "./NonVegList";
import SignatureList from "./SignatureList";
import { useState } from "react";

const RestaurantCategory = () => {
  const [showList, setShowList] = useState(false);
  const clickHandler = () => {
    setShowList(true);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="border bg-gray-100 shadow-lg w-[650px] my-2 p-4 hover:bg-gray-200">
        <div className="flex justify-between">
          <h1 className="font-bold">Recommended (3)</h1>
          <span>⬇️</span>
        </div>
        <RecommendedList />
        <RecommendedList />
        <RecommendedList />
      </div>
      <div className="border bg-gray-100 shadow-md w-[650px] my-2 p-4 hover:bg-gray-200">
        <div className="flex justify-between">
          <h1 className="font-bold">Non Veg Sandwiches (4)</h1>
          <span>⬇️</span>
        </div>
        <NonVegList />
        <NonVegList />
        <NonVegList />
        <NonVegList />
      </div>
      <div className="border bg-gray-100 shadow-md w-[650px] my-2 p-4 hover:bg-gray-200">
        <div className="flex justify-between">
          <h1 className="font-bold">Signature Wraps (2)</h1>
          <span>⬇️</span>
        </div>
        <SignatureList />
        <SignatureList />
      </div>
    </div>
  );
};

export default RestaurantCategory;
