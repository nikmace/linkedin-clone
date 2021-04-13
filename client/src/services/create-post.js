async function createPost(description, imageUrl, creator) {
    let success = await fetch('/create/post');

    return success;
};

module.exports = {
    createPost,
}