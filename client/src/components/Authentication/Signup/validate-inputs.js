const regex = new RegExp()

function validateInputs({ email, profileImage }, setErrors) {
    let errors = {}
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        errors.email = 'Incorrect email!';
    }
    if (!/^https:$/.test(profileImage)) {
        errors.profileImage = 'Profile image must be in the following format: "https:"';
    }

    setErrors(errors);

    if (errors.email || errors.profileImage) {
        return false;
    }
    return true;
}

module.exports = {
    validateInputs,
}