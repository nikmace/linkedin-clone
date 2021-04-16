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

module.exports = router;