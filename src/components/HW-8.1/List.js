import React from 'react'

export default function List(props) {
  return (
    <ul className="task__list">
      { props.list.map((item) => {
        return (
          <li className="task__list_item" onClick={ () => props.select({ id: item.id, name: item.name }) } key={ item.id } >
            { item.name }
          </li>
          )
      })}
    </ul>
  )
}
