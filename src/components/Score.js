import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {
  const counter = useSelector(state => state)

  return (
    <div>
      You Score is {counter}
    </div>
  )
}
