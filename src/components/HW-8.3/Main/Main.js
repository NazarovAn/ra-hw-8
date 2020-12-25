import React, { useContext } from 'react';
import './Main.css';
import AuthContext from '../Context/AuthContext';
import CardsList from './CardsList';
import Banner from './Banner';

export default function Main() {
  const { token } = useContext(AuthContext);
  return (
    <main className="neto__main">
      { token ? <CardsList /> : <Banner />}
    </main>
  )
}
