import React, { useState, useEffect } from 'react'
import Loading from './Loading'

export default function Details(props) {
  const [ info, setInfo ] = useState({});
  const [ imgLoading, setImgLoading ] = useState(true);

  async function getDetails(id) {
    const resp = await fetch(`${process.env.REACT_APP_DETALES_URL}${id}.json`);
    const data = await resp.json();
    setInfo(data);
  }

  useEffect(() => {
    getDetails(props.id);
  }, [props.id])

  return (
    info.details 
      ?
      <div className="task__detales_wrapper">
        <div className="task__detales_item">
          { imgLoading ? <Loading /> : null }
          <img className="task__detales_img"
            style={ imgLoading ? { display: "none" } : null }
            onLoad={ () => setImgLoading(false) }
            src={ info.avatar } alt={ `img #${info.id}`}
          />
        </div>
        <span className="task__detales_item task__detales_name">{ props.name }</span>
        <span className="task__detales_item">City: { info.details.city }</span>
        <span className="task__detales_item">Company: { info.details.company }</span>
        <span className="task__detales_item">Position: { info.details.position }</span>
      </div>
      :
      <Loading />
  )
}
