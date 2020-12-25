import React from 'react'

export default function Card(props) {
  return (
    <li className="neto__main_card">
      <img src={ props.image } alt="..." />
      <span>{ props.title }</span>
      <p>{ props.content }</p>
    </li>
  )
}
