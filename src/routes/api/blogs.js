const router = require('express').Router();

//traer el model
const Post = require('../../bdConnection');


//GET all POSTS
router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

//GET POSTS by ID
router.get('/:id', async (req, res) => {
    const posts = await Post.findAll({
        where: { id: req.params.id }
    });
    res.json(posts);
});

//CREATE a new post
router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post)
});

//EDITAR un post
router.put('/:id', async (req, res) => {
    await Post.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'El post se ha modificado con éxito' });
});

//ELIMINAR un post
router.delete('/:id', async (req, res) => {
    await Post.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'El post ha sido eliminado' })
})

//ELIMINAR todos los POST
router.delete('/', async (req, res) => {
    await Post.destroy({
        where: { }
    });
    res.json({ success: 'El post ha sido eliminado' })
})


//Generate sample DATA
//Not working, must read documentation
var fs = require('fs');
/*var json = JSON.parse(fs.readFileSync('../../../generateSampleData.json', 'utf8')); */

router.post('/generateSampleData', async (req, res) => {
    const post = await Post.create(
        json
    );
    res.json(post)
});


module.exports = router;