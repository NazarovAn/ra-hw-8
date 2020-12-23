import React, { useState, useEffect } from 'react'
import List from './List'
import Details from './Details'
import './Information.css'

export default function Information() {
  const [ list, setList ] = useState([]);
  const [ selected, setSelected ] = useState({});

  async function getList() {
    const resp = await fetch(`${process.env.REACT_APP_DETALES_URL}users.json`);
    const newList = await resp.json();
    setList(newList);
  }

  useEffect(() => {
    getList();
  }, [])

  return (
    <div className="inf__wrapper">
      <List list={ list } select={ setSelected } />
      { selected.id ? <Details { ...selected } /> : null }
    </div>
  )
}
