const Post = require('../models/Post');

const slugify = require("slugify");

exports.createPost = async (req, res) => {
    try {
        let { title, content } = req.body;
        let slug = slugify(title, { lower: true, strict: true });

        // Check if the slug already exists and modify it if needed
        let count = 0;
        let uniqueSlug = slug;

        while (await Post.findOne({ slug: uniqueSlug })) {
            count++;
            uniqueSlug = `${slug}-${count}`;
        }

        const newPost = new Post({
            title,
            slug: uniqueSlug,
            content,
            author: req.user.id
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updatePost = async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Post updated' });
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
};