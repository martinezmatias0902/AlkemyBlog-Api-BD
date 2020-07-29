//Code by Martinez Matias
const sequelize = require('./bdConnection')

//querys a la BD

const querys = {
    //Traer todos los Posts del BLOG
    allBlogs: async() => {
        try {
            const blogs = await sequelize.query('SELECT * FROM `blog-post`',
            { type: sequelize.QueryTypes.SELECT })
            return blogs
        } catch (err) {
            console.log(`Error: ` + err)
        }
    },

    //Traer post por ID
    blogsById: async (id) => {
        try {
            const postId = await sequelize.query('SELECT * FROM `blog-post` WHERE id = "' + id + '"',
            { type: sequelize.QueryTypes.SELECT });
            return postId
        } catch (err) {
            console.log('Error: ' + err )
        }
    },

    //Crear nuevo POSt
    createPost: async (title, text, fecha) => {
        try {
            const nuevoPost = sequelize.query('INSERT INTO `blog-post` (title, text, timestamp) VALUES (?, ?, ?)',
            { replacements: [title, text, fecha] });
            return nuevoPost
        } catch (err) {
            console.log('Error: ' + err)
        }
    },

    //Actualizar un POST
    postUpdate: async (title, text, id) => {
        try {
            const postActualizado = await sequelize.query('UPDATE `blog-post` SET title = "' + title + '", text = "' + text + '" WHERE id = ' + id);
        return postActualizado
        } catch (err) {
            console.log('Error: ' + err)
        }
    },

    //Eliminar un post por ID
    deletePost: async (id) => {
        try {
            const postIdEliminar = await sequelize.query('DELETE FROM `blog-post` WHERE id = ' + id);
            return postIdEliminar
        } catch (err) {
            console.log('Error: ' + err)
        }
    },

    //Eliminar todos los POST
    deleteAllPost: async () => {
        try {
            const postEliminados = await sequelize.query('DELETE FROM `blog-post`');
            return postEliminados
        } catch (err) {
            console.log('Error: ' + err)
        }
    }
}

module.exports = querys;