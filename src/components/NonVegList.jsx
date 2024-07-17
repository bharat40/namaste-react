import { NON_VEG_SANDWICH_IMAGE_URL } from "../utils/constants";
import AddButton from "./AddButton";
const NonVegList = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="text-left">
        <h1>Tandoori Chicken Tikka Sandwich</h1>
        <h1>$300</h1>
        <p>Enjoy your favourite Tandoori Chicken Tikka Sandwich</p>
      </div>
      <div>
        <img
          src={NON_VEG_SANDWICH_IMAGE_URL}
          alt="non-veg-sandwich-image"
          className="h-32"
        />
        <AddButton />
      </div>
    </div>
  );
};

export default NonVegList;
