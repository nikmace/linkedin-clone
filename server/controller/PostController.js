const { Router } = require('express');
const postService = require('../services/postService');

const router = Router();

router.post('/create', async (req, res, next) => {
    const data = await req.body;
    
    let response = postService.createPost(data);
    
    res.status(201).send({ message: 'Post created', status: '201', success: true });
});


router.get('/', async (req, res, next) => {
    const posts = await postService.getPosts();

    res.status(200).send({ posts: posts, success: true });
});

module.exports = router;