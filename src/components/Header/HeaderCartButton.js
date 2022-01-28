import classes from './HeaderCartButton.module.css'
import React from 'react'
import CartIcon from '../UI/CartIcon'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      Your cart
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
