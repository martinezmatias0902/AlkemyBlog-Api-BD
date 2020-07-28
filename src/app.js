// Code by Martinez Matias
const express = require('express');
const bodyParser = require('body-parser');
const querys = require('./querys');


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());



// Middlewares

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
            .then( (blog) => res.status())
    }
})


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
});