const express = require("express");
const {createBlog} = require("../controllers/blog.controller");
const router = express.Router();


router.post("/add", createBlog);

module.exports = router;