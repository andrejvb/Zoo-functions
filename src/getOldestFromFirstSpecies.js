const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findSpecie = data.employees.find((element) => element.id === id).responsibleFor[0];
  const { residents } = data.species.find((element1) => element1.id === findSpecie);
  const olderOne = residents.sort((a, b) => b.age - a.age);
  return Object.values(olderOne[0]);
};

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
