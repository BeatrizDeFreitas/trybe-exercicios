const sum2 = require('./script');

test('Verifica se a soma de 1 e 2 é 3', () => {
    expect(sum2(1, 2)).toBe(3);
})