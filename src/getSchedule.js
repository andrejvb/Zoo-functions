const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysAndHour = Object.keys(data.hours);

const schedule = () => {
  const objeto = daysAndHour.reduce((acc, day) => {
    acc[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(day)).map((e) => e.name),
    };
    return acc;
  }, {});
  objeto.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objeto;
};
// console.log(schedule());

const getSchedule = (target) => {
  if (target === undefined) {
    return schedule();
  }
  const checkSpecie = species.some((e) => target === e.name);
  if (!checkSpecie && !daysAndHour.includes(target)) {
    return schedule();
  }
  if (daysAndHour.includes(target)) {
    return { [target]: schedule()[target] };
  }
  return species.find((e) => e.name === target).availability;
};

module.exports = getSchedule;
