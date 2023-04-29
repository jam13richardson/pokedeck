const fetchPokemon = require('./api');

describe('fetchPokemon test', () => {
  test('returns an object with Pokemon data', (done) => {
    fetchPokemon('pikachu').then((data) => {
       expect(data.name).toEqual('pikachu');
        done();
      });
    }, 20000); 
  });
