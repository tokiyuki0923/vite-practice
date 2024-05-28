import React from 'react';
import Card from './Card';

const Pokemon = ({ pokemon }) => {
return (
    <div className="pokemon-list">
    {pokemon.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
    ))}
    </div>
);
};

export default Pokemon;

