import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokemonCard = ({pokemons}) => {
    const [pokemon, setPokemon] = useState({})
    console.log(pokemon, "ppppp")

    const getPokemon = async (url) => {
        try {const { data } = await axios.get(url)
            return data
        }catch(e)
            {console.log("error". e)
        } finally{
            console.log("final")
    }
}

useEffect(() => {
    getPokemon(pokemons.url).then(pok => setPokemon(pok))
}, [pokemons.url]);

    return (
        <div>
    {pokemon && <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="pokemon"/>}
        </div>
    );
};

export default PokemonCard;