//Code by Martinez Matias
//BD important information

const host = 'localhost';               //host
const database_name = 'AlkemyBlog';     //database name
const user = 'root';                    //username
const password = '';                    //password
const port = '3306';                    //port number

//BD Connection

/* const sequelize = new Sequelize('mysql://' + user + ':' + password + '@' + host + ':' + port + '/' + database_name); 

sequelize
    .authenticate()
    .then(() => {
    console.log(`Conexión éxitosa a la base de datos: ${database_name}`)
}
).catch(err => {
    console.log(`No se pudo conectar a BD, error: ${err}`)
});

module.exports = sequelize; */

module.exports = {
    conf_db_name   : database_name,
    conf_host      : host,
    conf_user      : user,
    conf_password  : password,
    conf_port      : port
};