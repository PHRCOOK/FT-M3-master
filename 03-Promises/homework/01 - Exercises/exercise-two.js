"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // promise version
  // Tu código acá:
  exerciseUtils
    .promisifiedReadFile("poem-two/stanza-01.txt")
    .then((stanza1) => {
      exerciseUtils.blue(stanza1);
      return exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt");
    })
    .then((stanza2) => {
      exerciseUtils.blue(stanza2);
    })
    .catch((err) => {
      exerciseUtils.magenta(new Error(err));
    });
}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  // promise version
  // Tu código acá:
  const readFilePromisified = (filename) => {
    return new Promise((resolve, reject) => {
      exerciseUtils
        .promisifiedReadFile(filename)
        .then((stanza) => {
          exerciseUtils.blue(stanza);
          resolve();
        })
        .catch((err) => {
          exerciseUtils.magenta(new Error(err));
          reject();
        });
    });
  };

  Promise.all(filenames.map(readFilePromisified))
    .then(() => {
      console.log("done");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, str, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Archivo escrito exitosamente");
        }
      });
    });
  }
}
