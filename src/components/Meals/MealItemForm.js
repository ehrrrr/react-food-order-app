import classes from './MealItemForm.module.css'
import React from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label='Amount' type='number' id={Math.random().toString()} />
      <Button />
    </form>
  )
}

export default MealItemForm
