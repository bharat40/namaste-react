import { SANDWICH_IMAGE_URL } from "../utils/constants";
import AddButton from "./AddButton";
const RecommendedList = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="text-left">
        <h1>sandwich + coke</h1>
        <h1>$299</h1>
        <p>Enjoy your favourite sandwich with coke</p>
      </div>
      <div>
        <img src={SANDWICH_IMAGE_URL} alt="sandwich-image" className="h-24" />
        <AddButton />
      </div>
    </div>
  );
};
export default RecommendedList;
