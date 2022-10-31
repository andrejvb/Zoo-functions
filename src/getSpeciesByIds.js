const data = require('../data/zoo_data');

function getSpeciesByIds(...animalIds) {
  const findSpecies = data.species.filter((animais) => animalIds.includes(animais.id));
  return findSpecies;
}

module.exports = getSpeciesByIds;
