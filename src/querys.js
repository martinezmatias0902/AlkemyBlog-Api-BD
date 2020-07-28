//Code by Martinez Matias
const sequelize = require('./bdConnection')

//querys a la BD

const querys = {
    allBlogs: async() => {
        try {
            const blogs = await sequelize.query('SELECT * FROM `blog-post`',
            { type: sequelize.QueryTypes.SELECT })
            return blogs
        } catch (err) {
            console.log(`Error: ` + err)
        }
    }
}

module.exports = querys;