import React from 'react'
import s from './Input.module.css'

function Input({ type, name, placeholder }) {
  
  return (
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder}>  
    </input>
  )
}

export default Input