const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../configs/env");

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (e) {
        return res.status(401).json({success: false, message: "Invalid Token"})
    }
}

module.exports = auth;