const express = require("express");
let publications = [];
let id = 0;
const server = express();
server.use(express.json());

// Crear una nueva publicación
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents) {
    // Verificar si se recibieron todos los parámetros necesarios
    res.status(400).json({
      error:
        "No se recibieron los parámetros necesarios para crear la publicación",
    });
  } else {
    const newPost = { id: ++id, author, title, contents };
    publications.push(newPost);
    res.status(201).json(newPost);
  }
});

// Obtener publicaciones filtradas por autor y título
server.get("/posts", (req, res) => {
  const { author, title } = req.query;
  if (!author || !title) {
    // Verificar si se recibieron todos los parámetros necesarios
    res.status(400).json({
      error: "No existe ninguna publicación con dicho título y autor indicado",
    });
  } else {
    const filteredPosts = publications.filter(
      (post) => post.author === author && post.title === title
    );
    if (filteredPosts.length > 0) {
      res.status(200).json(filteredPosts);
    } else {
      res.status(400).json({
        error:
          "No existe ninguna publicación con dicho título y autor indicado",
      });
    }
  }
});

// Obtener publicaciones filtradas por autor
server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const filteredPosts = publications.filter((post) => post.author === author);
  if (filteredPosts.length > 0) {
    res.status(200).json(filteredPosts);
  } else {
    res.status(400).json({
      error: "No existe ninguna publicación del autor indicado",
    });
  }
});

// Actualizar una publicación existente
server.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  const postIndex = publications.findIndex((post) => post.id == id);
  if (postIndex !== -1) {
    publications[postIndex] = { ...publications[postIndex], title, contents };
    res.status(200).json(publications[postIndex]);
  } else {
    res.status(400).json({
      error:
        "No se recibió el id correcto necesario para modificar la publicación",
    });
  }
});

// Eliminar una publicación existente
server.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = publications.findIndex((post) => post.id == id);
  if (postIndex !== -1) {
    publications.splice(postIndex, 1);
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({
      error:
        "No se recibió el id correcto necesario para eliminar la publicación",
    });
  }
});

// NO MODIFICAR EL CÓDIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
