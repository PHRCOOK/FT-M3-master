"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
 exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    exerciseUtils.blue(stanza2);
    exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
      exerciseUtils.blue(stanza3);
    });
  });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt")
    .then(function(stanza2) {
      exerciseUtils.blue(stanza2);
      return exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
    })
    .then(function(stanza3) {
      exerciseUtils.blue(stanza3);
      exerciseUtils.blue("done");
    })
    .catch(function(err) {
      exerciseUtils.magenta(new Error(err));
    });
  
}

function problemB() {
  // callback version
  exerciseUtils.readFile(
    "poem-one/wrong-file-name.txt",
    function (err, stanza4) {
      if (err) exerciseUtils.magenta(new Error(err));
      else exerciseUtils.blue(stanza4);
    }
  );

  // promise version
  // Tu código acá:
   exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt")
    .then(function(stanza4) {
      exerciseUtils.blue(stanza4);
    })
    .catch(function(err) {
      exerciseUtils.magenta(new Error(err));
    });
}

function problemC() {
  // callback version
 exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    if (err) return exerciseUtils.magenta(new Error(err));
    exerciseUtils.blue(stanza3);
    exerciseUtils.readFile(
      "poem-one/wrong-file-name.txt",
      function (err2, stanza4) {
        if (err2) return exerciseUtils.magenta(new Error(err2));
        exerciseUtils.blue(stanza4);
      }
    );
  });

  // promise version
  // Tu código acá:
   exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt")
    .then(function(stanza3) {
      exerciseUtils.blue(stanza3);
      return exerciseUtils.promisifiedReadFile("poem-one/stanza-04.txt");
    })
    .then(function(stanza4) {
      exerciseUtils.blue(stanza4);
    })
    .catch(function(err) {
      exerciseUtils.magenta(new Error(err));
    });
}
