// La función levelOne toma dos argumentos y devuelve su suma.
const levelOne = (a, b) => {return a + b;};

// La función levelTwo toma una cadena de texto, la divide en un array de caracteres,
// filtra los caracteres en índices impares, y luego une los caracteres restantes de nuevo en una cadena.
const levelTwo = (letras) => {
  return letras
      .split('')
      .filter((l, i) => {
         return i % 2 === 0;
      })
      .join('');
};

// La función levelThree toma dos arrays, los concatena y luego ordena el array resultante.
const levelThree = (a, b) => {return a.concat(b).sort();};

// La función levelFour verifica si un número está incluido en el array [1729, 1, 81, 1458].
const levelFour = (num) => {
  const henryNumbers = [1729, 1, 81, 1458];
  return henryNumbers.includes(num);
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };