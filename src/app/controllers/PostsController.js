const Post = require('../../models/Post');

class PostsController {
    //[[Get] /
    index(req, res, next) {
        Post.find({})
            .then((posts) => res.status(200).json(posts))
            .catch(next);
    }
}
module.exports = new PostsController();
