import React from 'react'
import Header from './components/Header/Header'
import MealsSummary from './components/Meals/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals'

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App;
