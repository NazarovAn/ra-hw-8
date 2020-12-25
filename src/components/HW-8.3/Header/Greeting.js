import React, { useContext } from 'react';
import AuthContext from "../Context/AuthContext";

export default function Greeting(props) {
  const { handleLogout } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    handleLogout();
  }

  return (
    <div className="neto__header_greeting">
      Hello, { props.name } <img src={ props.avatar } alt="..." /> <a href="/" onClick={ handleClick }>Logout</a>
    </div>
  )
}
