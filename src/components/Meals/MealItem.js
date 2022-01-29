import classes from './MealItem.module.css'
import React from 'react'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>{props.price}</span>
      </div>
      <MealItemForm />
    </div>
  )
}

export default MealItem
