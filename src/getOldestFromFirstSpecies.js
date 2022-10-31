const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(specie, age) {
  const animalsAge = data.species.every((animais) => age >= animais.residents.age);
  return animalsAge;
}

module.exports = getOldestFromFirstSpecies;
