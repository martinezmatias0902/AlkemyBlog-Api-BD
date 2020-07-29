// Code by Martinez Matias
const express = require('express');
const bodyParser = require('body-parser');
const querys = require('./querys');

const app = express();
const port = process.env.PORT || 8080;


// Middlewares

app.use(bodyParser.json());


// Endpoint GET all BLOGS

app.get('/', (req, res) => {
    res.send("It's alive!")
});

app.get('/api/blog', (req, res) => {
    try {
        querys.allBlogs().then( (blogs) => 
        res.status(200).json({ blogs: blogs }
        ))
    } catch (err) {
        res.status(404).json({ error: err })
    }
})

// Endpoint to specific BLOG (ID)

app.get('/api/blog/:id', (req, res) => {
    try {
        const { id } = req.params;
        querys.blogsById(id)
            .then( (blog) => res.status(200).json({ blog: blog }));
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

// Create a new post
app.post('/api/blog', (req, res) => {
    try {
        let { title, text, fecha } = req.body;
        const newPost = querys.createPost( title, text, fecha );
        postCreado = newPost[0];
        if (newPost) {
            res.status(200).json({ msg: "Creado con éxito!" })
        } else {
            res.status(401).json({ msg: "Error, llene el formulario correctamente" })
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

//Actualizar un POST
app.put('/api/blog/:id', (req, res) => {
    try {
        const { title, text } = req.body;
        const { id } = req.params;
        const actualizar_post = querys.postUpdate( title, text, id );
        if (actualizar_post) {
            res.status(200).json({ msg: "Post actulizado con éxito" })
        } else {
            res.status(401).json({ msg: "Complete de manera correcta los cambios" })
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

//Eliminar un POST por ID
app.delete('/api/blog/:id', (req, res) => {
    try {
        const { id } = req.params;
        const postEliminado = querys.deletePost( id );
        if (postEliminado) {
            res.status(200).json({ msg: "Post eliminado con éxito" })
        } else {
            res.status(401).json({ msg: "Indique el ID del post a eliminar" })
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

//Eliminar todos los POST
app.delete('/api/blog', (req, res) => {
    try {
        const allPostDeleted = querys.deleteAllPost();
        if (allPostDeleted) {
            res.status(200).json({ msg: "Todos los post fueron eliminados con éxito" })
        } else {
            res.status(401).json({ msg: "Error al eliminar los post" })
        }
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

//Server listening:

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
});