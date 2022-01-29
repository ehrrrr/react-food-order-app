import classes from './MealItemForm.module.css'
import React from 'react'
import Input from '../UI/Input/Input'

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label='Amount' type='number' id={Math.random().toString()} />
      <button type='submit'>+Add</button>
    </form>
  )
}

export default MealItemForm
