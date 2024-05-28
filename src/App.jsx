import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = [];
      for (let i = 1; i <= 1025; i++) { 
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
      }

      const results = await Promise.all(promises);
      const pokemonData = results.map(data => ({
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
        type: data.types.map(type => type.type.name).join(', ')
      }));
      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>ポケモン図鑑</h1>
      </header>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
