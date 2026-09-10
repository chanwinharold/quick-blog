const {ADMIN_EMAIL, ADMIN_PASSWORD, SECRET_KEY} = require("../configs/env");
const jwt = require("jsonwebtoken");
const Blog = require("../models/blog.model");
const Comment = require("../models/comment.model");


exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({success: false, message: "Invalid credentials"})
        }

        const token = jwt.sign({email}, SECRET_KEY)
        return res.status(200).json({success: true, token})

    } catch (err) {
        return res.status(400).json({success: false, message: err.message})
    }
}

exports.getAllAdminBlog = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        return res.status(200).json({success: true, blogs});
    } catch (err) {
        return res.status(400).json({success: false, message: err.message});
    }
}

exports.getAdminBlogComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate('blog').sort({createdAt: -1})
        return res.status(200).json({success: true, comments});
    } catch (e) {
        return res.status(400).json({success: false, message: e.message})
    }
}

exports.getDashboard = async (req, res) => {
    try {
        const recentsBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const draftBlogs = await Blog.countDocuments({isPublished: false})

        const dashboardData = {blogs, comments, recentsBlogs, draftBlogs}
        return res.status(200).json({success: true, dashboardData})
    } catch (e) {
        return res.status(400).json({success: false, message: e.message})
    }
}

exports.deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body
        await Blog.findByIdAndDelete(id)
        return res.status(200).json({success: true, message: "Deleted successfully"})
    } catch (e) {
        return res.status(400).json({success: false, message: e.message})
    }
}


exports.approveCommentById = async (req, res) => {
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true})
        return res.status(200).json({success: true, message: "Comment approved successfully"})
    } catch (err) {
        return res.status(400).json({success: false, message: err.message})
    }
}