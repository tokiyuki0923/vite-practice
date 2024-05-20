import React, { useEffect, useState } from 'react';

const Pokemon = () => {
const [imgUrl, setImgUrl] = useState('');

useEffect(() => {
    const fetchPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await response.json();
        const spriteUrl = data.sprites.other.dream_world.front_default;
        setImgUrl(spriteUrl);
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
    };
    fetchPokemon();
}, []);

return (
    <div id="one">
    {imgUrl && <img src={imgUrl}/>}
    </div>
);
};


export default Pokemon
