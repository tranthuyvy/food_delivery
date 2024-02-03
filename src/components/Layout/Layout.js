import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Cart from "../UI/cart/Cart.jsx";

const Layout = () => {
  return (
    <div>
      <Header />

      <Cart />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
