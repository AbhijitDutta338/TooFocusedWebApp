const Tag = require('../models/tags');

//@desc Get all Tags
//@route GET /tags
//@access Private
exports.getTags = async(req, res, next)=>{
    try {
        const tag = await Tag.find();
        if(!tag){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data: tag
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            error: error
        })
    }
}

//@desc Get a Tag by ID
//@route GET /tags/:id
//@access Private
exports.getTagById = async (req, res, next) => {
    try {
      const tag = await Tag.findById(req.params.id);
      if (!tag) {
        return res.status(404).json({
          success: false,
          error: 'Tag not found',
        });
      }
      res.status(200).json({
        success: true,
        data: tag,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };