const { Router } = require('express');
const router = Router();

const PostController = require('../controller/PostController');
const DummyController = require('../controller/DummyController');
const UserController = require('../controller/UserController');

router.use('/', DummyController);
router.use('/post', PostController);
router.use('/user', UserController);

module.exports = router;