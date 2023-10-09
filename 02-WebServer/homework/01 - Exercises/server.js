const fs = require("fs");
const http = require("http");

// Puerto en el que se levantará el servidor
const PORT = 3001;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  console.log(`Servidor levantado en el puerto ${PORT}`);

  // Ruta "/api"
  if (req.url === "/api") {
    // Leer el archivo "dogsData.json"
    fs.readFile("./utils/dogsData.json", (err, data) => {
      if (err) {
        // Si ocurre un error al leer el archivo, devolver una respuesta con código de estado 404 y mensaje "json not found"
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("json not found");
      } else {
        // Si se lee el archivo correctamente, devolver el contenido como respuesta JSON
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
      return;
    });
  }
  // Ruta "/allDogs"
  else if (req.url === "/allDogs") {
    // Leer el archivo "allDogs.html"
    fs.readFile("./utils/allDogs.html", "utf8", (err, data) => {
      if (err) {
        // Si ocurre un error al leer el archivo, devolver una respuesta con código de estado 404 y mensaje "html not found"
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("html not found");
      } else {
        // Si se lee el archivo correctamente, devolver el contenido como respuesta HTML
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
      return;
    });
  }
  // Ruta no encontrada
  else {
    // Si se solicita una ruta distinta a "/api" o "/allDogs", devolver una respuesta con código de estado 404 y mensaje "Route not found"
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// Escuchar en el puerto especificado y en "localhost"
server.listen(PORT, "localhost", () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Exportar el servidor para su uso externo
module.exports = server;