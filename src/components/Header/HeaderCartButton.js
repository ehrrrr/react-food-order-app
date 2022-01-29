import classes from './HeaderCartButton.module.css'
import React, { useState } from 'react'
import CartIcon from '../UI/CartIcon'
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
    <React.Fragment>
      {openCart && <Cart onClose={closeCartHandler} />}
      <button onClick={openCartHandler} className={classes.button}>
      <CartIcon className={classes.icon} />
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
    </React.Fragment>
  )
}

export default HeaderCartButton
