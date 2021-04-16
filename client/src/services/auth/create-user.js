async function createUser({ name, email, password, username, profileImage }) {
    const data = {
        name,
        username,
        email,
        password,
        profileImage,
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
        let response = await fetch('/user/signup', options);
        console.log(response)
        let data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    createUser,
}