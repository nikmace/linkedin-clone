async function createPost(description, imageUrl, creator) {
    const data = {
        description,
        imageUrl,
        creator,
    };

    const options = {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {
        let response = await fetch('/post/create', options);
        let data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    createPost,
}