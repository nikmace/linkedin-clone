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
    }
});

module.exports = mongoose.model('Comment', commentSchema);
