const express = require('express');
const cors = require('cors');
const { getPosts, addPost } = require('./queries');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  await addPost(titulo, url, descripcion);
  res.send("Post agregado con éxito");
});

app.listen(3000, () => console.log("Servidor encendido en puerto 3000"));
