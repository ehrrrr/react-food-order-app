import classes from './MealItem.module.css'
import React from 'react'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <span className={classes.description}>{props.description}</span>
      <span className={classes.price}>{props.price}</span>
      <MealItemForm />
    </div>
  )
}

export default MealItem
