import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AddButton = () => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    // dispatch action
    dispatch(addItem("pizza"));
  };
  return (
    <div>
      <button
        className="bg-black shadow-lg font-semibold p-2 rounded-md my-1 text-white hover:bg-gray-700"
        onClick={handleAddItem}
      >
        Add +
      </button>
    </div>
  );
};

export default AddButton;
