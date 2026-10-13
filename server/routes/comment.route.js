const express = require("express");
const {addComment, getBlogComments} = require("../controllers/comment.controller")
const router = express.Router();


router.post(`/add`, addComment)
router.post(`/all`, getBlogComments)


module.exports = router;