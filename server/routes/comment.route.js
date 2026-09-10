const express = require("express");
const auth = require("../middlewares/auth")
const {addComment, getBlogComments} = require("../controllers/comment.controller")
const router = express.Router();


router.post(`/add`, auth, addComment)
router.post(`/all`, auth, getBlogComments)


module.exports = router;