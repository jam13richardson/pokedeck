const fetchPokemon = require("./api.js");

class Pokedex {
  constructor() {
    this.myPokemon = [];
}

catch(pokemon) {
  fetchPokemon(pokemon)
  this.myPokemon.push(pokemon) 
}

all() {
return this.myPokemon
}

}

module.exports = Pokedex; 

//const Pokedex = require('./pokedex')

//// in the node REPL

// const pokedex  = new Pokedex();
// pokedex.catch('pikachu'); // Adds pikachu to the pokedex
// // then, after some time has passed...
// pokedex.catch('jigglypuff'); // Adds jigglypuff to the pokedex
// // then, after some time has passed...
// pokedex.all(); // returns an array of the pokemon in the pokedex