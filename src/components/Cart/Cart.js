import classes from './Cart.module.css'
import React from 'react'
import Modal from '../UI/Modal/Modal'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>
    {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
      <CartItem
        key={item.id}
        title={item.name}
        price={item.price}
        amount={item.amount}
      />
    ))}
  </ul>

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 22.33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
