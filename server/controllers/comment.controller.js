const Comment = require("../models/comment.model")


exports.addComment = async (req, res) => {
    try {
        const {blog, name, content} = req.body;
        await Comment.create({blog, name, content});

        return res.status(201).json({success: true, message: "Comment added successfully"})
    } catch (e) {
        return res.status(400).json({success: false, message: e.message})
    }
}

exports.getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1})
        return res.status(200).json({success: true, comments});
    } catch (e) {
        return res.status(400).json({success: false, message: e.message})
    }
}