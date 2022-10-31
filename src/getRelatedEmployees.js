const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((empregado) => empregado.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  const gerenciados = data.employees.filter((empregado) => empregado.managers.includes(managerId));
  if (isManager(managerId)) {
    return gerenciados.map((empregado1) => `${empregado1.firstName} ${empregado1.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
