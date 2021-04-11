const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post',
        }
    ],
    profileImage: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);