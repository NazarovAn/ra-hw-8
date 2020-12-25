import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import Form from './Form';
import AuthContext from '../Context/AuthContext';
import Greeting from "./Greeting";

export default function Header() {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(process.env.REACT_APP_PRIVATE_URL + 'me', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      setUser(await response.json());
    }

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <div className="neto__header">
      <span className="neto__header_logo">Neto Social</span>
      { token ? <Greeting {...user} /> : <Form /> }
    </div>
  )
}
