const express = require("express");
const {createBlog, getAllBlogs, getOneBlog, deleteBlog, togglePublish} = require("../controllers/blog.controller");
const upload = require("../middlewares/multer")
const auth = require("../middlewares/auth")
const router = express.Router();


router.post("/add", upload.single("image"), auth, createBlog);
router.get("/all", getAllBlogs);
router.get("/:blogId", getOneBlog);
router.delete("/delete", auth, deleteBlog);
router.put ("/publish", auth, togglePublish);

module.exports = router;