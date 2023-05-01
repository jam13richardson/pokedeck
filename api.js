
//old code, prior to adding Pokemon details and removing console.log
// const fetchPokemon = (pokemonName) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };


// module.exports = fetchPokemon;


const fetchPokemon = (myPokemon) => {
 return fetch(`https://pokeapi.co/api/v2/pokemon/${myPokemon}`)
 .then((response) => response.json())
    .then((data) => {
    const PokemonData = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight
    };
    console.log(PokemonData)
       return PokemonData
    })
  }

module.exports = fetchPokemon;

