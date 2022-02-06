import classes from './AvailableMeals.module.css'
import React from 'react'
import Card from '../UI/Card/Card'
import MealItem from './MealItem'
import { DUMMY_MEALS as meals } from './dummy-meals'

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map(meal => (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  )
}

export default AvailableMeals
