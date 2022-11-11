const data = require('../data/zoo_data');

function getEmployee(param) {
  const name = data.employees.find((employee) =>
    employee.firstName === param.name || employee.lastName === param.name);

  const id = data.employees.find((employee) =>
    employee.id === param.id);

  if (name === undefined) return id;

  return name;
}

function generateInfo(info) {
  const profile = {
    id: info.id,
    fullName: `${info.firstName} ${info.lastName}`,
    species: info.responsibleFor.map((animalId) =>
      data.species.find((employee) => employee.id === animalId).name),
    locations: info.responsibleFor.map((animalId) =>
      data.species.find((employee) => employee.id === animalId).location),
  };

  return profile;
}

function getEmployeesCoverage(info) {
  if (info === undefined) {
    const allemployees = [];
    data.employees.forEach((employee) => {
      allemployees.push(generateInfo(employee));
    });

    return allemployees;
  }

  if (getEmployee(info) === undefined) {
    throw new Error('Informações inválidas');
  }

  return generateInfo(getEmployee(info));
}

module.exports = getEmployeesCoverage;
