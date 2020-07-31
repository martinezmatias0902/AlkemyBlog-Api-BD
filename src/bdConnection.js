//Code by Martinez Matias

// BD connection
const db_data = require('./bdConnectionData');
const Sequelize = require('sequelize');

const PostBlog = require('./model/posts');

const sequelize   = new Sequelize( db_data.conf_db_name, db_data.conf_user, db_data.conf_password, { 
    host: db_data.conf_host,
    dialect: 'mysql',
    port: db_data.conf_port,
    dialectOptions: {
        multipleStatements: true
    }
});


const post = PostBlog(sequelize, Sequelize);

sequelize.sync({ force: false })
.then( () => {
    console.log('Tablas sincronizadas correctamente.')
}).catch(err => {
    console.log(`No se pudo conectar a BD, error: ${err}`)
});

module.exports  = post;