import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Cart from "../UI/cart/Cart.jsx";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Cart />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
