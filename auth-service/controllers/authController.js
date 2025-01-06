const jwt = require("jsonwebtoken");
const { findUserByEmail, registerUser } = require("../services/authService");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: "Password Incorrect" });
        }

        const payload = { email, name: user.name };
        const token = jwt.sign(payload, "secret");

        return res.status(200).json({ token });
    } catch (error) {
        console.error("Login Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const register = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const userExists = await findUserByEmail(email);

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await registerUser({ email, password, name });
        return res.status(201).json(newUser);
    } catch (error) {
        console.error("Register Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    login,
    register,
};
