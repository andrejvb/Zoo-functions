const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  it('Para os argumentos monday e 09:00-AM, deve retornar a string', () => {
  });
  expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  it('Para os argumentos Tuesday e 09:00-AM, deve retornar a string', () => {
  });
  it('Para os argumentos Wednesday e 09:00-PM, deve retornar a string', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Se não passarmos argumentos, deve retornar o objeto hours', () => {
    expect(getOpeningHours()).toEqual(hours);
    expect(getOpeningHours()).toBeDefined();
  });
});
