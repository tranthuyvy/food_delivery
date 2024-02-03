import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'

import '../../../styles/shopping-cart.scss'

const Cart = () => {
  return (
    <div className='cart__container'>
      <ListGroup className='cart'>
        <div className='cart__close'>
          <span><i class='ri-close-fill'></i></span>
        </div>

        <div className='cart__item__list'>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className='cart__bottom d-flex align-items-center justify-content-between'>
          <h6>Subtotal: <span>$68</span></h6>
          <button><Link to='/checkout'>Checkout</Link></button>
        </div>

      </ListGroup>
    </div>
  )
}

export default Cart
