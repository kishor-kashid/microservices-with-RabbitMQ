const User = require("../models/User");

const findUserByEmail = async (email) => {
    return User.findOne({ email });
};

const registerUser = async (userData) => {
    const newUser = new User(userData);
    return newUser.save();
};

module.exports = {
    findUserByEmail,
    registerUser,
};
