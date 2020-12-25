import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import Card from './Card';

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(process.env.REACT_APP_PRIVATE_URL + 'news', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      setCards(await response.json());
    }

    fetchCards();
  }, [token])
  
  return (
    <ul className="neto__main_cards">
      { cards.map((card) => <Card { ...card } key={ card.id } />) }
    </ul>
  )
}
