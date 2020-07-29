//Code by Martinez Matias

// BD connection
const db_data = require('./bdConnectionData');
const Sequelize   = require('sequelize');

const sequelize   = new Sequelize( db_data.conf_db_name, db_data.conf_user, db_data.conf_password, { 
    host: db_data.conf_host,
    dialect: 'mysql',
    port: db_data.conf_port,
    dialectOptions: {
        multipleStatements: true
    }
});

sequelize
    .authenticate()
    .then(() => {
    console.log(`Conexión éxitosa a la base de datos: ${db_data.conf_db_name}`)
}
).catch(err => {
    console.log(`No se pudo conectar a BD, error: ${err}`)
});

module.exports  = sequelize;