import classes from './HeaderCartButton.module.css'
import React, { useState, Fragment } from 'react'
import CartIcon from '../Cart/CartIcon'
import Cart from '../Cart/Cart'

const HeaderCartButton = (props) => {
  const [openCart, setOpenCart] = useState(false)
  const openCartHandler = (event) => {
    setOpenCart(true)
  }
  const closeCartHandler = () => {
    setOpenCart(false)
  }
  return (
    <Fragment>
      {openCart && <Cart onClose={closeCartHandler} />}
      <button onClick={openCartHandler} className={classes.button}>
        <span className={classes.icon} >
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton
