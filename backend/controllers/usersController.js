const registerUser = (req, res) => {
    res.send('User Register');
}
const loginUser = (req, res) => {
    res.send('User Login');
}

module.exports = { registerUser,  loginUser };