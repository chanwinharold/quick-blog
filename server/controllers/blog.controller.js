const Blog = require("../models/blog.model");
const fs = require("node:fs");
const imageKitClient = require("../configs/imagekit")


// Create a new blog post
exports.createBlog = async (req, res) => {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog)
        let image = req.file;

        // check if all fields are present
        if (!title || !description || !category || !image) {
            return res.status(400).json({success: false, message: "Missing required fields"})
        }

        // Upload image to ImageKit
        const response = await imageKitClient.files.upload({
            file: fs.readFileSync(image.path),
            filename: image.file.originalname
        })

        // Optimize image
        image = imageKitClient.helper.buildSrc({
            src: response.filePath,
            transformation: [
                {quality: "auto"},
                {format: "png"},
                {width: "1280"}
            ]
        });

        await Blog.create({title, subTitle, description, category, isPublished, image});
        res.status(201).json({success: true, message: "Blog created successfully"})

    } catch (e) {
        res.status(400).json({success: false, message: e.message})
    }
}