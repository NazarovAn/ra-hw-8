import React from 'react';
import AuthContext from "./AuthContext";
import useStorage from './useStorage';

export default function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile');

  const handleLogin = async (login, password) => {
    try {
      const response = await fetch(process.env.REACT_APP_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error('Auth failed');        
      }

      const data = await response.json();
      setToken(data.token);
      setProfile(login);
    } catch(err) {
      handleLogout();
    }
  }

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, token, profile }}>
      {props.children}
    </AuthContext.Provider>
  )
}
