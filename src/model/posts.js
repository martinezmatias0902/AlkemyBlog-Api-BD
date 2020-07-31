//Los modelos representan las tablas
//En este caso la tabla POST
//Creación de la tabla:

module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        text: type.TEXT,
        timestamp: type.DATE
    })
}
