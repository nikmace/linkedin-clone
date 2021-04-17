const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createUser(body) {
    const { name, email, password, username, profileImage } = body;

    const result = {};
    
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
    try {
        result.user = await user.save();
    } catch (err) {
        result.errors = err.message;
    }

    return result;
}

async function loginUser(body) {
    const { username, password } = body;
    const result = {};
    const user = await User.findOne({ username: username });
    if (!user) {
        result.errors = 'User does not exist';
        return result;
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        result.errors = 'Invalid password!';
        return result;
    }

    const token = await jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
    }, process.env.TOKEN_SECRET_KEY);

    result.token = token;
    return result;
}

module.exports = {
    createUser,
    loginUser,
}