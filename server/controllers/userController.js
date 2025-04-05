const User = require('../models/userModel');
const createToken = require('../utilities/token');

//login user
const loginUser = async (req, res) => {
    const { _id, email, password } = req.body;
    try {
        const user = await User.login(email, password);
        //create a token
        const token =  createToken(_id);

        res.status(200).json({ _id, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//signup user
const signupUser = async (req, res) => {
    const { _id, email, password, name } = req.body;
    try {
        const user = await User.signup(email, password, name);
        //create a token
        const token = createToken(_id);

        res.status(200).json({ _id, email, name,  token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = { loginUser, signupUser };