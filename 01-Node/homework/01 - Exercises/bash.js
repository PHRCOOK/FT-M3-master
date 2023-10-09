const process = require('process');
const {Z_AZCII} = require ('zlib')
const commands = require('./commands/index.js');

// Función para imprimir el resultado en la consola
function print(output) {
  const message = output.replace(/^echo /, ''); 
  process.stdout.write(message);
  process.stdout.write('\nprompt > ');
}

// Función principal que maneja la consola
function bash() {
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
    const args = data.toString().trim();
    const cmd = args.split(' ')[0];
    if (!commands[cmd]) {
      print(`command not found: ${cmd}`);
      return;
    }
    commands[cmd](print, args);
    process.stdout.write('\nprompt > ');
  });
}

module.exports = {
  print,
  bash,
};