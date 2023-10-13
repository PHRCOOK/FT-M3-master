"use strict";

// Importamos el módulo exerciseUtils desde el archivo utils.js
let exerciseUtils = require("./utils");
const utils = require ("./utils");

// Obtenemos los argumentos pasados por línea de comandos y los convertimos a mayúsculas
let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

// Exportamos las funciones problemA, problemB, etc. para ser utilizadas desde otros archivos
module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF,
};

// Ejecutamos cada problema pasado como argumento desde la línea de comandos
args.forEach(function (arg) {
  var problem = module.exports["problem" + arg];
  if (problem) problem();
});

async function problemA() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
    console.log("-- A. callback version --");
    exerciseUtils.blue(stanza);
  });

  // Versión con estilo async/await
  try {
    const stanza = await exerciseUtils.promisifiedReadFile("poem-one/stanza-01.txt");
    console.log("-- A. versión async/await --");
    exerciseUtils.blue(stanza);
  } catch (error) {
    throw new Error("problemA | No se llamó a la stanza correcta");
  }
}

async function problemB() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    console.log("-- B. callback version (stanza two) --");
    exerciseUtils.blue(stanza2);
  });
  exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- B. callback version (stanza three) --");
    exerciseUtils.blue(stanza3);
  });

  // Versión con estilo async/await
  const stanza2 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt");
  console.log("-- B. versión Async Await (segunda estrofa) --");
  exerciseUtils.blue(stanza2);
  const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
  console.log("-- B. versión Async Await (tercera estrofa) --");
  exerciseUtils.blue(stanza3);
}

async function problemC() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    console.log("-- C. callback version (stanza two) --");
    exerciseUtils.blue(stanza2);
    exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
      console.log("-- C. callback version (stanza three) --");
      exerciseUtils.blue(stanza3);
      console.log("-- C. callback version done --");
    });
  });

  // Versión con estilo async/await
  try {
    const stanza2 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt");
    console.log("-- C. Versión async/await (segunda estrofa) --");
    exerciseUtils.blue(stanza2);
    const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
    console.log("-- C. Versión async/await (tercera estrofa) --");
    exerciseUtils.blue(stanza3);
    console.log("-- C. Versión async/await finalizada --");
  } catch (err) {
    console.error(err);
  }
}

async function problemD() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile(
    "poem-one/wrong-file-name.txt",
    function (err, stanza4) {
      console.log("-- D. callback version (stanza four) --");
      if (err) exerciseUtils.magenta(new Error(err));
      else exerciseUtils.blue(stanza4);
    }
  );

  // Versión con estilo async/await
  try {
    const stanza4 = await exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt");
    console.log("-- D. Versión async/await (cuarta estrofa) --");
    exerciseUtils.blue(stanza4);
  } catch (err) {
    exerciseUtils.magenta(new Error(err));
  }
}

async function problemE() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- E. callback version (stanza three) --");
    if (err) return exerciseUtils.magenta(new Error(err));
    exerciseUtils.blue(stanza3);
    exerciseUtils.readFile(
      "poem-one/wrong-file-name.txt",
      function (err2, stanza4) {
        console.log("-- E. callback version (stanza four) --");
        if (err2) return exerciseUtils.magenta(err2);
        exerciseUtils.blue(stanza4);
      }
    );
  });

  // Versión con estilo async/await
  try {
    const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
    console.log("-- E. Versión async/await (tercera estrofa) --");
    exerciseUtils.blue(stanza3);
    const stanza4 = await exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt");
    console.log("-- E. Versión async/await (cuarta estrofa) --");
    exerciseUtils.blue(stanza4);
  } catch (err) {
    exerciseUtils.magenta(err);
  }
}

async function problemF() {
  // Versión con estilo de devolución de llamada (callback)
  exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- F. callback version (stanza three) --");
    if (err) {
      if (err) exerciseUtils.magenta(new Error(err));
      console.log("-- F. callback version done --");
      return;
    }
    exerciseUtils.blue(stanza3);
    exerciseUtils.readFile(
      "poem-one/wrong-file-name.txt",
      function (err2, stanza4) {
        console.log("-- F. callback version (stanza four) --");
        if (err2) exerciseUtils.magenta(new Error(err2));
        else exerciseUtils.blue(stanza4);
        console.log("-- F. callback version done --");
      }
    );
  });

  // Versión con estilo async/await
  try {
    await utils.blue(await utils.promisifiedReadFile("stanza-03.txt"));
    await utils.blue(await utils.promisifiedReadFile("stanza-04.txt"));
  } catch (error) {
    utils.magenta(error);
  } finally {
    console.log("done");
  }
}