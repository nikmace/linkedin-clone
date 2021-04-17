async function isAuthenticated() {
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    try {
        let response = await fetch('/auth', options);
        console.log(response)
        let data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    isAuthenticated,
}