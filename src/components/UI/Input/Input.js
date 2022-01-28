import classes from './Input.module.css'
import React from 'react'

const Input = (props) => {

  return (
    <div className={`${ classes.input } ${ props.className }`} >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input