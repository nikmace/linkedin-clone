const { Router } = require('express');
const router = Router();

const PostController = require('../controller/PostController');
const DummyController = require('../controller/DummyController');

router.use('/', DummyController);
router.use('/post', PostController);

module.exports = router;