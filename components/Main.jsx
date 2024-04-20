import React, {useEffect, useState} from 'react'
import PokeDetails from './PokeDetails';
import Pokemon from './Pokemon';

const Main = () => {
    const [pokemons, setPokemons] = useState([])
    const [text, setText] = useState('')
    const [showDetails, setShowDetails] = useState(false)
    const [pokestats, setPokestats] = useState({
        name: '',
        height: '',
        weight: '',
        img:'',
        moves: [],
        stats: [],
        types: [],
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json())
        .then((allpokemon)=>{
            allpokemon.results.forEach((pokemon)=>{
                pokeDetails(pokemon)
            })
            setIsLoading(false);
    })
    }, [])

    const pokeDetails = (pokemon) => {
        fetch(pokemon.url)
        .then((response) => response.json())
        .then(((pokeData)=>{
            setPokemons((pokemons) => [...pokemons, pokeData])
            }))
    }
  return (
    <div className='flex flex-col justify-center items-center'>
    <input type="text" placeholder="Search Pokemon" 
    className="content-center border-2 border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-red-300 m-5 w-2/4 "
    value={text}
    onChange={(e) => setText(e.target.value)}
    />
    {isLoading ? <div>Loading...</div> : (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {/* using a ternary operator to check if the text input is empty or not,
    if text input not empty then filter the pokemons array and return the filtered array */}
    {text === '' ? pokemons.map((pokemon) => (
        <div 
        key={pokemon.id}
        onClick={() => {
        setPokestats({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                img: pokemon.sprites.other.home.front_default,
                moves: pokemon.moves,
                id: pokemon.id,
                types: pokemon.types,
                abilities: pokemon.abilities,
            });
        setShowDetails(true);
        }}>
        <Pokemon pokeName={pokemon.name} pokeID = {pokemon.id} pokeImg = {pokemon.sprites.other.dream_world.front_default} pokeType = {pokemon.types}
        />
        </div>
        )) : 
        pokemons.filter((pokemon) => pokemon.name.includes(text.toLowerCase())).map((pokemon) => (
            <div 
            key={pokemon.id}
            onClick={() => {
        setPokestats({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                img: pokemon.sprites.other.dream_world.front_default,
                moves: pokemon.moves,
                id: pokemon.id,
                types: pokemon.types,
                abilities: pokemon.abilities,
            });
        setShowDetails(true);
        }}>
            <Pokemon pokeName={pokemon.name} pokeID = {pokemon.id} pokeImg = {pokemon.sprites.other.dream_world.front_default} pokeType = {pokemon.types}
            /></div>
        ))}
            </div>
        </div>)}
        <PokeDetails isVisible={showDetails} onClose={()=>setShowDetails(false)} pokeImg={pokestats.img} pokeName={pokestats.name} pokeHeight={pokestats.height} pokeWeight={pokestats.weight}
        pokeType={pokestats.types} pokeMoves={pokestats.moves} pokeID={pokestats.id} pokeAbilities={pokestats.abilities}
        ></PokeDetails>
    </div>
  )};

export default Main


// fix image error