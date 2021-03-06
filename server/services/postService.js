const Post = require('../models/Post');
const User = require('../models/User');

async function createPost(data) {
    const obj = {
        description: data.description,
        imageUrl: data.imageUrl,
        createdAt: new Date().toISOString(),
        likesCount: 0,
        commentsCount: 0,
        creator: data.creator,
    };

    const post = new Post(obj);

    return await post.save();
}

async function getPosts() {
    const posts = await Post.find({}).populate('User').lean();
    console.log(posts)
    return posts;
}

module.exports = {
    createPost,
    getPosts,
}