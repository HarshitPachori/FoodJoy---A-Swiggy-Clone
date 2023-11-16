import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/slices/appSlice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="flex items-center justify-between p-5 bg-gradient-to-b from-teal-100 to-white sticky top-0 z-10 ">
      <h1 className="font-bold tracking-widest text-2xl cursor-pointer ">
        {/* <a href="/">FoodVilla</a> */}
        <Link to="/">FoodVilla</Link>
      </h1>
      <div className="hidden sm:block">
        <ul className="flex space-x-2 text-xl ">
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <button
        className="hover:scale-105 ease-in-out duration-400 sm:hidden"
        onClick={() => handleToggleMenu()}
      >
        <img
          src={`${
            isMenuOpen
              ? "https://www.seaicons.com/wp-content/uploads/2015/06/Very-Basic-Cancel-icon.png"
              : "https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          } `}
          alt="menu-logo"
          className="h-5 "
        />
      </button>
    </nav>
  );
};

export default Header;
