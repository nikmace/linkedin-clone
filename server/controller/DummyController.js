const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log(req.body)
    res.json({message: 'Hello'}).status(201)
})

module.exports = router;
