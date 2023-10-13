const levelOne = (a, b) => {return a + b;};

const levelTwo = (letras) => {
  return letras
      .split('')
      .filter((l, i) => {
         return i % 2 === 0;
      })
      .join('');
};

const levelThree = (a, b) => {return a.concat(b).sort();};

const levelFour = (num) => {
  const henryNumbers = [1729, 1, 81, 1458];
  return henryNumbers.includes(num);};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
