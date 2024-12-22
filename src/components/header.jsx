import React, { forwardRef, useImperativeHandle } from "react";
import HeaderTop from "./headertop";
import { Link } from "react-router-dom";
import { cart } from "../data/cart.js";
import { wishlistProducts } from "../data/wishlist.js";

const CartCount = (props) => {
  let count = props.cartValue;
  let display;
  if (count === 0) {
    display = "invisible";
  }

  return (
    <>
      <div
        className={`absolute w-4 h-4 text-white rounded-full -top-1.5 -right-1 bg-red-500 text-xs flex items-center justify-center font-semibold  ${display}`}
      >
        {count}
      </div>
    </>
  );
};

const WishlistCount = (props) => {
  let count = props.wishlistValue;
  let display;
  if (count === 0) {
    display = "invisible";
  }
  return (
    <>
      <div
        className={`absolute w-4 h-4 text-white rounded-full -top-1.5 -right-1 bg-red-500 text-xs flex items-center justify-center font-semibold ${display}`}
      >
        {count}
      </div>
    </>
  );
};

const Header = forwardRef((props, ref) => {
  const [profile, setProfile] = React.useState(false);
  let color = props.profiledivclicked ? "bg-red-500" : "";

  const [cartValue, setCartvalue] = React.useState(cart.length);
  const [wishlistValue, setwishlistvalue] = React.useState(
    wishlistProducts.length
  );

  useImperativeHandle(ref, () => ({
    setCartvalue,
    setwishlistvalue,
  }));

  return (
    <>

      <HeaderTop />
      <div className="flex flex-row mt-3 w-full justify-between h-14 md:h-20 m-auto items-center border-b border-gray-400">
        <Link className=" lg:ml-28 ml-10 text-3xl font-medium " to="/">Haha</Link>
        <ul className="lg:flex flex-row w-80 justify-between font-500 hidden">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              contact us
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hover:underline">
              About us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Sign up
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 lg:mr-24 sm:mr-12">
          <div className=" hidden md:block">
            <label className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="what are you looking for?"
                className="bg-slate-100 p-2 pr-8 rounded-s-md focus:outline-none"
              />
              <img
                src={"/images/search.svg"}
                alt="searc icon"
                className="w-6 pr-2 bg-slate-100 rounded-e-md"
              />
            </label>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Link to={"/wishlist"} className="relative">
              <img
                src={"/images/heart.svg"}
                alt="the heart icon"
                className="w-6 "
              />
              <WishlistCount wishlistValue={wishlistValue} />
            </Link>
            <Link to={"/cart"} className="relative">
              <img
                src={"/images/shopping-cart.svg"}
                alt="the shopping cart image"
                className="w-6"
              />
              <CartCount cartValue={cartValue} />
            </Link>
            {profile ? (
              ""
            ) : (
              <Link
                to="/account"
                className={`flex items-center justify-center h-8 w-8 rounded-full ${color}`}
              >
                <img
                  src={"/images/user.svg"}
                  alt="the shopping cart image"
                  className="w-6"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
