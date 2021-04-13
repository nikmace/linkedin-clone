const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    creator: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    body: {
        type: String,
    },
    likesCount: {
        type: Number,
    },
    createdAt: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Comment', commentSchema);
