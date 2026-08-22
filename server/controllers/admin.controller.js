const {ADMIN_EMAIL, ADMIN_PASSWORD, SECRET_KEY} = require("../configs/env");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({success: false, message: "Invalid credentials"})
        }

        const token = jwt.sign({email}, SECRET_KEY)
        return res.status(200).json({success: true, token})

    } catch (err) {
        return res.status(400).json({success: false, message: err.message})
    }
}