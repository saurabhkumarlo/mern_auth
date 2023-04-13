import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        id="menuId"
        className="hidden items-center mx-5 my-1 text-black space-x-8 lg:flex dark:text-white"
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/addProduct"}>AddProducts</Link>
        {/* <Link to={"/carts"}>Cart ({cartsItems?.length})</Link> */}
        {/* <Link to={"/wishlists"}>WishList ({wishlistsItems?.length})</Link> */}
        <Link to={"/product/compare"}>Compare</Link>
      </div>
    </div>
  );
};

export default Navbar;
