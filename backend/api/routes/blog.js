const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog');

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Get blog by ID
router.get('/:id', blogController.getBlogById);

// Create blog
router.post('/', blogController.createBlog);

// Delete blog
router.delete('/:id', blogController.deleteBlog);

// Update blog
router.put('/:id', blogController.updateBlog);

// Add like
router.post('/:id/likes', blogController.addLike);

// Remove like
router.delete('/:id/likes', blogController.removeLike);

// Add Comment
router.post('/:id/comments', blogController.addComment);

// Remove Comment
router.delete('/:id/comments/:commentId', blogController.removeComment);

// Get Blogs By User
router.get('/author/:userId', blogController.getBlogsByAuthor);

module.exports = router;
