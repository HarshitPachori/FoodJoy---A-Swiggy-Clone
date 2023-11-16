import React from "react";
import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";

const CartItem = ({ name, description, imageId, price }) => {
  return (
    <div className="m-2 w-[300px] hover:scale-95 ease-in-out duration-300">
      <div className="shadow-xl relative rounded-2xl overflow-hidden ">
        <img src={CLOUDINARY_IMG_URL + imageId} className="relative" />
        <div className=" absolute top-0 bg-gradient-to-t from-black to-transparent to-50% h-full w-full"></div>
      </div>
      <div className="p-2">
        <h3 className="font-bold">{name}</h3>
        {/* <h2>{description}</h2> */}
        <h4 className="font-semibold ">Price : {price}</h4>
      </div>

      <button className="bg-red-500">-</button>
      <button className="bg-red-500">+</button>
    </div>
  );
};

export default CartItem;
