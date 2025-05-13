import React from 'react'

export default function FunctionalProp(props) {
  return (
    <div>
        <h3>This is functional component</h3>
        <h3>Hello {props.name}! from {props.place} Welcome to Simplilearn</h3>
    </div>
  )
}
