async function getPosts() {
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    try {
        let posts = await fetch('/post', options);
        let data = await posts.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getPosts,
}