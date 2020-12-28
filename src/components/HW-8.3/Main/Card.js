import React, { useState } from 'react';
import Loading from '../Loading/Loading';

export default function Card(props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <li className="neto__main_card">
      { isLoading ? <Loading /> : null }
      <img 
        src={ props.image } 
        alt="..."
        onLoad={ () => setLoading(false) }
        style={{ display: isLoading ? 'none' : null }}
      />
      <span>{ props.title }</span>
      <p>{ props.content }</p>
    </li>
  )
}
