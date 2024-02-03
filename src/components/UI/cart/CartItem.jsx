import React from 'react';
import { ListGroupItem } from 'reactstrap';

import productImg from '../../../assets/images/product_01.1.jpg';
import '../../../styles/cart-item.scss';

const CartItem = () => {
  return (
    <ListGroupItem className='border-0 cart__item'>
      <div className='cart__item__info d-flex gap-2'>
        <img src={productImg} alt='product-img' />

        <div className='cart__product__info w-100 d-flex align-items-center justify-content-between'>
          <div>
            <h6 className='cart__product__title'>Burger</h6>
            <p className='cart__product__price d-flex align-items-center gap-5'>
              2x <span>$24.00</span>
            </p>
            <div className='increase__decrease__btn d-flex align-items-center justify-content-between '>
              <span className='increase__btn'>
                <i class='ri-add-line'></i>
              </span>
              <span className='quantity'>2</span>
              <span className='decrease__btn'>
                <i class='ri-subtract-line'></i>
              </span>
            </div>
          </div>

          <span className='delete__btn'>
            <i class='ri-close-line'></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
