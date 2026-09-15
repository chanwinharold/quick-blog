const Comment = require("../models/comment.model")


exports.addComment = async (req, res) => {
    try {
        const {blog, name, content} = req.body;
        await Comment.create({blog, name, content});

        return res.json({success: true, message: "Comment added successfully"})
    } catch (e) {
        return res.json({success: false, message: e.message})
    }
}

exports.getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1})
        return res.json({success: true, comments});
    } catch (e) {
        return res.json({success: false, message: e.message})
    }
}