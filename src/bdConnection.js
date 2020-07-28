//Code by Martinez Matias
const Sequelize = require('sequelize');

//Crear ruta a la base de datos

const host = 'localhost';
const database_name = 'AlkemyBlog';
const user = 'root';
const password = '';
const port = '3306';

//BD Connection

const sequelize = new Sequelize('mysql://' + user + ':' + password + '@' + host + ':' + port + '/' + database_name); 

sequelize
    .authenticate()
    .then(() => {
    console.log(`Conexión éxitosa a la base de datos: ${database_name}`)
}
).catch(err => {
    console.log(`No se pudo conectar a BD, error: ${err}`)
});

module.exports = sequelize;