import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { cartActions } from '../store/shopping-cart/cartSlice'

import "../styles/cart-page.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section className="section__cart">
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>Subtotal: <span className="cart__subtotal">${totalAmount}</span></h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page__btn">
                  <button className="continue__shopping__btn me-4">
                    <Link to='/foods'>
                      Continue Shopping
                    </Link>
                  </button>

                  <button className="checkout__btn">
                    <Link to='/checkout'>
                      Checkout
                    </Link>
                  </button>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch= useDispatch()

  const handleDelete = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <tr>
      <td className="text-center">
        <img className="cart__img__box" src={image01} alt="img" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item__delete">
        <i class="ri-delete-bin-line" onClick={handleDelete}></i>
      </td>
    </tr>
  );
};

export default Cart;
