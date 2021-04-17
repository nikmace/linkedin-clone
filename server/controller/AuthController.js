const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.get('/', async (req, res) => {
    const token = req.cookies.authToken;
    
    const result = await authService.isAuthenticated(token);
    
    if (result.errors) {
        res.status(401).send({ message: 'Authentication failed', success: false });
    }
    if (result.verified) {
        res.status(200).send({ message: 'User authenticated', success: true, user: result.verified });
    }
})

module.exports = router;
