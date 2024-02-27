import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import classes from "./PokemonPage.module.css";



const PokemonPage= () => {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons);
    const getPokemons = async () => {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(data.results)

    }
    useEffect(() => {
        getPokemons()
    }, []);
    return (
        <div className={classes.card}>
            {
                pokemons && pokemons.map(pokemon => <PokemonCard
                    key={pokemon.name} pokemon={pokemon}/>)

            }

        </div>
    )
};
export default PokemonPage;
