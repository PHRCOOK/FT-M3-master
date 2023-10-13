const antiTrollsSecurity = (string) => {
  ;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  
  return result;
}

module.exports = antiTrollsSecurity;
