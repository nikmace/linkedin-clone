async function loginUser({ username, password }) {
    const data = {
        username,
        password,
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
        let response = await fetch('/user/login', options);
        console.log(response)
        let data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    loginUser,
}