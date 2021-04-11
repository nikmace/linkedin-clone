const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    likesCount: {
        type: Number,
    },
    commentsCount: {
        type: Number,
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    description: {
        type: String,
        maxlength: 1000,
    },
    imageUrl: {
        type: String,
        validate: /^https?/,
    },
    creator: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
});

module.exports = mongoose.model('Post', postSchema);
