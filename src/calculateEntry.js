const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entradas) =>
  entradas.reduce((acc, { age }) => {
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    if (age < 18) acc.child += 1;
    return acc;
  }, { adult: 0, senior: 0, child: 0 });

function calculateEntry(entradas) {
  let sum;
  if (!entradas || Object.keys(entradas).length === 0) {
    sum = 0;
  } else {
    const bilheteria = countEntrants(entradas);
    sum = Object.keys(bilheteria).reduce(
      (acc, currV) => acc + bilheteria[currV] * data.prices[currV],
      0,
    );
  }
  return sum;
}
// console.log(calculateEntry(entrants));
// console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
