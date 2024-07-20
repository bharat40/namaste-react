import nonvegsandwich from "../utils/menuItemsImages/nonvegsandwich.jpg";
import AddButton from "./AddButton";
const NonVegList = () => {
  return (
    <div className="flex justify-between my-5 px-5">
      <div className="text-left">
        <h1>Tandoori Chicken Tikka Sandwich</h1>
        <h1>$300</h1>
        <p>Enjoy your favourite Tandoori Chicken Tikka Sandwich</p>
      </div>
      <div>
        <img src={nonvegsandwich} alt="image-2" className="h-28"/>
        <AddButton />
      </div>
    </div>
  );
};

export default NonVegList;
