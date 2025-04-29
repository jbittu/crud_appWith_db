const User = require('../models/userModel');
const createToken = require('../utilities/token');

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    
    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, email: user.email, name: user.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.signup(email, password, name);
    
    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, email: user.email, name: user.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
