import Sandwich from "../utils/menuItemsImages/sandwich.jpg";
import AddButton from "./AddButton";
const RecommendedList = () => {
  return (
    <div className="flex justify-between my-5 px-5">
      <div className="text-left">
        <h1>sandwich + coke</h1>
        <h1>$299</h1>
        <p>Enjoy your favourite sandwich with coke</p>
      </div>
      <div>
        <img src={Sandwich} alt="image1" className="h-28" />
        <AddButton />
      </div>
    </div>
  );
};
export default RecommendedList;
