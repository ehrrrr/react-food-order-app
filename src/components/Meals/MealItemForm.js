import classes from './MealItemForm.module.css'
import React, { useState } from 'react'
import Input from '../UI/Input/Input'

const MealItemForm = (props) => {
  const [mealNumber, setMealNumber] = useState(0)

  const addMealHandler = (event) => {
    event.preventDefault()
    console.log('Add meal ' + mealNumber)
  }

  const mealNumberHandler = (event) => {
    setMealNumber(event.target.value)
  }
  return (
    <form onSubmit={addMealHandler} className={classes.form}>
      <Input label='Amount' input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
        onChange: { mealNumberHandler }
      }} />
      <button type='submit'>+ Add</button>
    </form>
  )
}

export default MealItemForm
