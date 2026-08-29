require("dotenv").config({override: true});

exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.ADMIN_EMAIL = process.env.ADMIN_EMAIL;
exports.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
exports.SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.IMAGEKIT_PUBLIC_KEY = process.env.IMAGEKIT_PUBLIC_KEY
exports.IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY
exports.IMAGEKIT_URL = process.env.IMAGEKIT_URL