const Blog = require("../models/blog.model");
const Comment = require("../models/comment.model");


// Create a new blog post
exports.createBlog = async (req, res) => {
    try {
        if (!req.body.blog) {
            return res.json({success: false, message: "Missing blog field"})
        }

        let blogData;
        try {
            blogData = JSON.parse(req.body.blog)
        } catch {
            return res.json({success: false, message: "Invalid blog JSON format"})
        }

        const {title, subTitle, description, category, isPublished} = blogData;
        const image = req.file;

        // check if all fields are present
        if (!title || !description || !category || !image) {
            return res.json({success: false, message: "Missing required fields"})
        }

        const imagePath = `/images/blogs/${image.filename}`;

        await Blog.create({title, subTitle, description, category, isPublished, image: imagePath});
        res.json({success: true, message: "Blog created successfully"})

    } catch (e) {
        res.json({success: false, message: e.message})
    }
}

// Retrieve all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({isPublished: true});
        return res.json({success: true, blogs: allBlogs});
    } catch (e) {
        res.json({success: false, message: e.message});
    }
}

exports.getOneBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.json({success: false, message: "Blog not found"});
        }
        return res.json({success: true, blog});
    } catch (e) {
        res.json({success: false, message: e.message});
    }
}

exports.deleteBlog  = async (req, res) => {
    try {
        const { id } = req.body
        await Blog.findByIdAndDelete(id);

        // Delete all comments associate to this deleted blog
        await Comment.deleteMany({blog: id});

        return res.json({success: true, message: "Blog deleted successfully"});
    } catch (e) {
        res.json({success: false, message: e.message});
    }
}

exports.togglePublish = async (req, res) => {
    try {
        const { id } = req.body
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();

        return res.json({success: true, message: "Blog updated successfully"});
    } catch (e) {
        res.json({success: false, message: e.message});
    }
}
