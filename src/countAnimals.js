const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalList = data.species
    .reduce((acc, currValue) => {
      acc[currValue.name] = currValue.residents.length;
      return acc;
    }, {});

  if (animal === undefined) {
    return animalList;
  }
  const { specie, sex } = animal;
  const [animalObject] = data.species.filter((element) => element.name === specie);
  if (sex) {
    return animalObject.residents.filter((element) => element.sex === sex).length;
  }
  return animalObject.residents.length;
}

module.exports = countAnimals;
