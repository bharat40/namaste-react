import RecommendedList from "./RecommendedList";
import NonVegList from "./NonVegList";
import SignatureList from "./SignatureList";

const RestaurantCategory = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border bg-gray-50 shadow-lg w-[650px] my-2 p-4 hover:bg-gray-100">
        <div className="flex justify-between">
          <h1 className="font-bold">Recommended(2)</h1>
          <span>⬇️</span>
        </div>
        <RecommendedList />
        <RecommendedList />
      </div>
      <div className="border bg-gray-50 shadow-md w-[650px] my-2 p-4 hover:bg-gray-100">
        <div className="flex justify-between">
          <h1 className="font-bold">Non Veg Sandwiches(3)</h1>
          <span>⬇️</span>
        </div>
        <NonVegList />
        <NonVegList />
        <NonVegList />
      </div>
      <div className="border bg-gray-50 shadow-md w-[650px] my-2 p-4 hover:bg-gray-100">
        <div className="flex justify-between">
          <h1 className="font-bold">Signature Wraps</h1>
          <span>⬇️</span>
        </div>
        <SignatureList />
      </div>
    </div>
  );
};

export default RestaurantCategory;
