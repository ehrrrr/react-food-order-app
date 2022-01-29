import classes from './Cart.module.css'
import React from 'react'
import Modal from '../UI/Modal/Modal'
import CartItem from './CartItem'

const Cart = (props) => {

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        <CartItem title='Item 1' price='12.43' amount='2' />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 22.33</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button className={classes['button--alt']}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
