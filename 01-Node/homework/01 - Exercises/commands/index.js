const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

// Imprime el directorio de trabajo actual
function pwd(print) {
    print(process.cwd());
}

// Imprime la fecha y hora actual
function date(print) {
    print(new Date().toString());
}

// Imprime los argumentos que se le pasen
function echo(print, args) {
    print(args);
}

// Lista los archivos y directorios en el directorio actual
function ls(print) {
    fs.readdir('.', (error, files) => {
        if (error) throw new Error (error);
        print(files.join(' '));
    });
}

// Muestra el contenido de un archivo
function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw new Error (error);
        print(data);
    });
}

// Muestra la primera línea de un archivo
function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw new Error (error);
        const lines = data.split('\n');
        print(lines[0]);
    });
}

// Muestra la última línea de un archivo
function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw new Error (error);
        const lines = data.split('\n');
        print(lines[lines.length - 1].trim());
    });
}

// Realiza una solicitud HTTP a una URL y muestra la respuesta
function curl(print, args) {
    utils.request(args, (error, response) => {
        if (error) throw new Error (error);
        print(response);
    });
}

// Exporta todas las funciones para que puedan ser utilizadas por otros módulos
module.exports = { pwd, date, echo, ls, cat, head, tail, curl };