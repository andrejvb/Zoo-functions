const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quando passado o argumento "count" retorna numero de Elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se retorna undefined sem paramêtro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Quando passado o argumento "averageAg" retorna a média de Elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Quando passado o argumento "location" retorna a localização dos Elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Quando passado o argumento "names" retorna um array com o nome Jefferson', () => {
    expect(handlerElephants('names')[3]).toMatch('Jefferson');
  });
  it('Quando passado o argumento "popularity" retorna a popularidade dos Elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Quando passado o argumento "availability" retorna 4 dias', () => {
    expect(handlerElephants('availability')).toHaveLength(4);
  });
  it('Quando passado o argumento "names" retorna um array', () => {
    expect(typeof handlerElephants('names')).toBe('array');
  });
});
