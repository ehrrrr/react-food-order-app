import classes from './Header.module.css'
import React from 'react'
import HeaderCartButton from './HeaderCartButton'

import image from '../../assets/meals.jpeg'

const Header = (props) => {

  return (
    <header>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes['main-image']} >
        <img alt='Food table' src={image} />
      </div>
    </header>

  )
}

export default Header