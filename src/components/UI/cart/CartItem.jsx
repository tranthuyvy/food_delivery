import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { useDispatch } from 'react-redux';

import '../../../styles/cart-item.scss';
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({item}) => {
  const {id, title, price, image01, quantity, totalPrice} = item

  const dispatch = useDispatch()
  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <ListGroupItem className='border-0 cart__item'>
      <div className='cart__item__info d-flex gap-2'>
        <img src={image01} alt='product-img' />

        <div className='cart__product__info w-100 d-flex align-items-center justify-content-between'>
          <div>
            <h6 className='cart__product__title'>{title}</h6>
            <p className='cart__product__price d-flex align-items-center gap-5'>
              {quantity} x ${price} = <span>${totalPrice}</span>
            </p>
            <div className='increase__decrease__btn d-flex align-items-center justify-content-between '>
              <span className='increase__btn' onClick={incrementItem}>
                <i class='ri-add-line'></i>
              </span>
              <span className='quantity'>{quantity}</span>
              <span className='decrease__btn' onClick={decreaseItem}>
                <i class='ri-subtract-line'></i>
              </span>
            </div>
          </div>

          <span className='delete__btn' onClick={deleteItem}>
            <i class='ri-close-line'></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
