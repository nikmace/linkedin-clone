const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createUser(body) {
    const { name, email, password, username, profileImage } = body;

    const result = {};
    const SECRET_KEY = process.env.SECRET_KEY;
    
    const userExists = await User.findOne({ email: email });
    if (userExists) {
        result.errors = 'User already exists';
        return result;
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        password: hashedPassword,
        username,
        profileImage,
        createdAt: new Date().toUTCString(),
        posts: [],
    });

    result.user = await user.save();

    return result;
}

module.exports = {
    createUser,
}