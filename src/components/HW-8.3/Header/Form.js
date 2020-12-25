import React, { useState, useContext } from 'react';
import AuthContext from "../Context/AuthContext";

export default function Form() {
  const { handleLogin } = useContext(AuthContext)
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const clearIntputs = () => {
    setValues({
      login: '',
      password: ''
    })
  }

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(values.login, values.password);
    clearIntputs();
  }

  return (
    <form className="neto__header_form">
      <input placeholder="Username" name="login" value={ values.login } onChange={ handleInput } />
      <input placeholder="Password" name="password" value={ values.password } onChange={ handleInput } type="password" />
      <a href="/" onClick={ handleSubmit }>Login</a>
    </form>
  )
}
