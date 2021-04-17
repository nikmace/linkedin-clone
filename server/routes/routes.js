const { Router } = require('express');
const router = Router();

const PostController = require('../controller/PostController');
const AuthController = require('../controller/AuthController');
const UserController = require('../controller/UserController');

router.use('/auth', AuthController);
router.use('/post', PostController);
router.use('/user', UserController);

module.exports = router;