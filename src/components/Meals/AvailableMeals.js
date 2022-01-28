import classes from './AvailableMeals.module.css'
import React from 'react'

const AvailableMeals = (props) => {

  return (
    <div className={classes.meals}>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}

export default AvailableMeals
