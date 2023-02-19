const Blog = require('../models/blog');

//@desc Get all Blogs
//@route GET /blogs
//@access Private
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find()
      .populate('description.user', 'userName')
      .populate('comments', 'username')
      .populate('likes', 'username');

      const blogsWithLikes = blogs.map((blog) => {
        return {
          _id: blog._id,
          title: blog.title,
          description: blog.description,
          comments: blog.comments,
          likes: blog.likes.length,
        };
      });
  
    res.status(200).json({
      success: true,
      data: blogsWithLikes,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//@desc Get Single Blog
//@route GET /blogs/:id
//@access Private
exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('description.user', 'username')
      .populate('comments', 'username')
      .populate('likes', 'username');
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//@desc Create Blog
//@route POST /blogs
//@access Private
exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//@desc Get all Blogs by user
//@route GET /blogs/author/:userId
//@access Private
exports.getBlogsByAuthor = async (req, res, next) => {
    try {
      const blogs = await Blog.find({ author: req.params.userId });
      res.status(200).json({
        success: true,
        data: blogs,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };

//@desc Update blog
//@route PUT /blogs/:id
//@access Private
exports.updateBlog = async (req, res, next) => {
    try {
      const blogId = req.params.id;
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, req.body,{ 
            new: true,
            runValidators : true
        }
      );
      res.status(200).json({
        success: true,
        data: updatedBlog,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };

//@desc Delete Blog
//@route DELETE /blogs/:id
//@access Private
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//@desc Add Like
//@route POST /blogs/:id/likes
//@access Private
exports.addLike = async (req, res, next) => {
    try {
      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likes: req.body.userId } },
        { new: true }
      ).populate('description.user', '-password');
      
      res.status(200).json({
        success: true,
        data: blog,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };

//@desc Remove Like
//@route DELETE /blogs/:id/likes
//@access Private
exports.removeLike = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $pull: { likes: req.body.userId } },
            { new: true }
        ).populate('description.user', '-password');

        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Add Comment
//@route POST /blogs/:id/comments
//@access Private
exports.addComment = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: { comment: req.body.comment, user: req.body.userId } } },
            { new: true }
        ).populate('comments.user', '-password');

        console.log(blog);

        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Remove Comment
//@route DELETE /blogs/:id/comments/:commentId
//@access Private
exports.removeComment = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $pull: { comments: { _id: req.params.commentId } } },
            { new: true }
        ).populate('description.user', '-password');

        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};