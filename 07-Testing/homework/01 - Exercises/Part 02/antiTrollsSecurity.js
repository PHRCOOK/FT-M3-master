// La función antiTrollsSecurity elimina todas las vocales de una cadena dada.
const antiTrollsSecurity = (string) => {
  // Define un array de vocales.
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  
  // Itera sobre cada carácter en la cadena.
  for (let i = 0; i < string.length; i++) {
    // Si el carácter no es una vocal, añádelo al resultado.
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  
  // Devuelve la cadena resultante sin vocales.
  return result;
}

module.exports = antiTrollsSecurity;