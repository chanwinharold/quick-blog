const express = require("express");
const {createBlog} = require("../controllers/blog.controller");
const upload = require("../middlewares/multer")
const auth = require("../middlewares/auth")
const router = express.Router();


router.post("/add", upload.single("image"), auth, createBlog);

module.exports = router;