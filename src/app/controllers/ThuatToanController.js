const Post = require('../../models/Post');
const { swap, bblSort } = require('../../utils');

class ThuatToanController {
    //[[Get] /
    getPosts(req, res, next) {
        Post.find({})
            .then((posts) => res.status(200).json(posts))
            .catch(next);
    }
    bubbleSort(req, res, next) {
        var array = [234, 43, 55, 63, 5, 6, 235, 547];
        // Hoạt động hiệu quả với array nhỏ
        // Sau mỗi vòng lặp sẽ có một thằng cuối cùng vào đúng với array
        //Độ phức tạp 0(N);
        const result = bblSort(array);
        res.status(200).json(result);
    }
    index(req, res, next) {
        res.status(200).json('ok');
    }
}
module.exports = new ThuatToanController();
