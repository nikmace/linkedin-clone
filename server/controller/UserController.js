const { Router } = require('express');
const userService = require('../services/userService');

const router = Router();

router.post('/signup', async (req, res) => {
    const result = await userService.createUser(req.body);
    if (result.errors) {
        res.status(400).send({ errors: result.errors, message: 'Something went wrong', success: false });
    }
    if (result.user) {
        res.status(201).send({ message: `User created: @`, redirect: '/feed', success: true });
    }
});

router.post('/login', async (req, res) => {
    const result = await userService.loginUser(req.body);
    if (result.errors) {
        res.status(400).send({ errors: result.errors, message: 'Something went wrong', success: false });
    }
    if (result.token) {
        res.cookie('authToken', result.token, {
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
        });
        res.status(200).send({ token: result.token, message: 'Successfully logged in', redirect: '/feed', success: true });
    }
});

module.exports = router;