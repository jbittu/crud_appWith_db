const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authUser = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.User = await User.findById(_id).select("_id");
    next();
  } catch (err) {
    return res.status(401).json({ message: "request Unauthorized" });
  }
};

module.exports = {
  authUser,
};
