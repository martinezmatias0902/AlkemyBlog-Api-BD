// Code by Martinez Matias
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

//Conexión a la DB
require('./bdConnection')

// Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Manda todas las peticiones con prefijo API al apiRouter
app.use('/api', apiRouter);


//Server listening:

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
});