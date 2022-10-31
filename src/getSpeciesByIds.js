const data = require('../data/zoo_data');

function getSpeciesByIds(...animalIds) {
  const findSpecies = data.species.filter((animal) => animalIds.includes(animal.id));
  return findSpecies;
}

module.exports = getSpeciesByIds;
