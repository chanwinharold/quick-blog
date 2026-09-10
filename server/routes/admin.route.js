const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {login, getAdminBlogComments, getAllAdminBlog, getDashboard, deleteCommentById, approveCommentById} = require("../controllers/admin.controller")

router.post('/login', login);
router.get('/dashboard', auth, getDashboard);
router.get('/blogs', auth, getAllAdminBlog);
router.get('/comments', auth, getAdminBlogComments);
router.delete('/comments', auth, deleteCommentById);
router.put('/comments', auth, approveCommentById);

module.exports = router;