import classes from './Cart.module.css'
import React from 'react'
import Button from '../UI/Button/Button'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div>
      <ul className={classes['cart-items']}>
        <CartItem title='Item 1' price='12.43' amount='2' />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 22.33</span>
      </div>
      <div className={classes.actions}>
        <Button>Close</Button>
        <Button className={classes['button--alt']}>Order</Button>
      </div>
    </div>
  )
}

export default Cart
