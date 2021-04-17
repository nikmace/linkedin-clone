const jwt = require('jsonwebtoken');
require('dotenv').config();

async function isAuthenticated(token) {
    const result = {};

    try {
        if (!token) {
            result.errors = 'No auth token available.';
            return result;
        }
        const verified = await jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        console.log(verified)
        if (!verified) {
            result.errors = 'Not verified!';
            return result;
        }
        result.verified = verified;
    } catch (err) {
        result.errors = err.message;
        return result;
    }

    return result;
}

module.exports = {
    isAuthenticated,
}