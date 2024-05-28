import React from 'react';

const Card = ({ pokemon }) => {
return (
    <div className="card">
    <img className="card-image" src={pokemon.image} alt={pokemon.name} />
    <h2 className="card-title">{pokemon.id}. {pokemon.name}</h2>
    <p className="card-subtitle">Type: {pokemon.type}</p>
    </div>
);
};

export default Card;
