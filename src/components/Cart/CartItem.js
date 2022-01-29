import classes from './CartItem.module.css'
import React from 'react'

const CartItem = (props) => {

  return (
    <li className={classes['cart-item']}>
      <h2>{props.title}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>{props.price}</span>
        <span className={classes.amount}>{props.amount}</span>
      </div>
      <div className={classes.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  )
}

export default CartItem