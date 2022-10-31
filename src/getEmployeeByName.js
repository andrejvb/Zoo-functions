const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  const getEmployee = data.employees.find((funcionario) => funcionario.firstName === employeeName
  || funcionario.lastName === employeeName);
  return getEmployee;
}

module.exports = getEmployeeByName;
