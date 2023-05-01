const fetchPokemon = require('./api');

describe('fetchPokemon test', () => {
  test('returns an object with Pokemon data', () => {
   return fetchPokemon('pikachu').then((data) => {
       expect(data.name).toBe('pikachu');
      });
  });
});