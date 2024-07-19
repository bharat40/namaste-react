import RecommendedList from "./RecommendedList";
import NonVegList from "./NonVegList";
import SignatureList from "./SignatureList";
import { useState } from "react";

const RestaurantCategory = () => {
  const [showRecommendedItems, setShowRecommendedItems] = useState(false);
  const handleClick1 = () => {
    if (showRecommendedItems == false) {
      setShowRecommendedItems(true);
    } else {
      setShowRecommendedItems(false);
    }
  };
  const [showNonVegSanwichItems, setShowNonVegSandwich] = useState(false);
  const handleClick2 = () => {
    if (showNonVegSanwichItems == false) {
      setShowNonVegSandwich(true);
    } else {
      setShowNonVegSandwich(false);
    }
  };
  const [showSignatureItems, setShowSignatureItems] = useState(false);
  const handleClick3 = () => {
    if (showSignatureItems == false) {
      setShowSignatureItems(true);
    } else {
      setShowSignatureItems(false);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="border bg-gray-50 shadow-lg w-[650px] my-2 p-4 hover:bg-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick1}
        >
          <h1 className="font-bold">Recommended(2)</h1>
          <span>⬇️</span>
        </div>
        {showRecommendedItems && <RecommendedList />}
        {showRecommendedItems && <RecommendedList />}
      </div>
      <div className="border bg-gray-50 shadow-md w-[650px] my-2 p-4 hover:bg-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick2}
        >
          <h1 className="font-bold">Non Veg Sandwiches(3)</h1>
          <span>⬇️</span>
        </div>
        {showNonVegSanwichItems && <NonVegList />}
        {showNonVegSanwichItems && <NonVegList />}
        {showNonVegSanwichItems && <NonVegList />}
      </div>
      <div className="border bg-gray-50 shadow-md w-[650px] my-2 p-4 hover:bg-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick3}
        >
          <h1 className="font-bold">Signature Wraps</h1>
          <span>⬇️</span>
        </div>
        {showSignatureItems && <SignatureList />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
