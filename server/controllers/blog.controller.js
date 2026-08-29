const Blog = require("../models/blog.model");
const fs = require("node:fs/promises");
const imageKitClient = require("../configs/imagekit")
const {IMAGEKIT_URL} = require("../configs/env");


// Create a new blog post
exports.createBlog = async (req, res) => {
    try {
        if (!req.body.blog) {
            return res.status(400).json({success: false, message: "Missing blog field"})
        }

        let blogData;
        try {
            blogData = JSON.parse(req.body.blog)
        } catch {
            return res.status(400).json({success: false, message: "Invalid blog JSON format"})
        }

        const {title, subTitle, description, category, isPublished} = blogData;
        let image = req.file;

        // check if all fields are present
        if (!title || !description || !category || !image) {
            return res.status(400).json({success: false, message: "Missing required fields"})
        }

        // Upload image to ImageKit
        const response = await imageKitClient.files.upload({
            file: await fs.readFile(image.path),
            fileName: image.originalname
        })

        // Remove temporary file uploaded by multer
        await fs.unlink(image.path).catch(() => {
        });

        // Optimize image
        image = imageKitClient.helper.buildSrc({
            urlEndpoint: IMAGEKIT_URL,
            src: response.filePath,
            transformation: [
                {quality: 80},
                {format: "png"},
                {width: 1280}
            ]
        });

        await Blog.create({title, subTitle, description, category, isPublished, image});
        res.status(201).json({success: true, message: "Blog created successfully"})

    } catch (e) {
        res.status(400).json({success: false, message: e.message})
    }
}

// Retrieve all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({isPublished: true});
        return res.status(200).json({success: true, data: allBlogs});
    } catch (e) {
        res.status(400).json({success: false, message: e.message});
    }
}

exports.getOneBlog = async (req, res) => {
    try {
        const { blogId } = req.parse
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({success: false, message: "Blog not found"});
        }
        return res.status(200).json({success: true, data: blog});
    } catch (e) {
        res.status(400).json({success: false, message: e.message});
    }
}

exports.deleteBlog  = async (req, res) => {
    try {
        const { id } = req.body
        await Blog.findByIdAndDelete(id);

        return res.status(200).json({success: true, message: "Blog deleted successfully"});
    } catch (e) {
        res.status(400).json({success: false, message: e.message});
    }
}

exports.togglePublish = async (req, res) => {
    try {
        const { id } = req.body
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();

        return res.status(200).json({success: true, message: "Blog updated successfully"});
    } catch (e) {
        res.status(400).json({success: false, message: e.message});
    }
}