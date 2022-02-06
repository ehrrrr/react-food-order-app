import React, { useState, Fragment } from 'react'
import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [order, setOrder] = useState([])

  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
