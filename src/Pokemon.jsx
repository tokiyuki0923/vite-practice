import React, { useEffect, useState } from 'react';

const Pokemon = () => {
const [imgUrl, setImgUrl] = useState('');

//useEffectは非同期処理のためのコンポーネント。つまりAPIを使用するときに使う
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
    <>
    {imgUrl && <img src={imgUrl}/>}
    </>
);
};


export default Pokemon
