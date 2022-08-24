const Post = require('../../models/Post');
const { swap, bblSort, insertionSort, quickSort, quickSortDev, mergeSort, heapSort } = require('../../utils');

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

    insertionSort(req, res, next) {
        var arr = [234, 43, 55, 63, 5, 6, 235, 547];
        let result = insertionSort(arr);
        console.log(result);
        res.status(200).json(result);
    }

    quickSort(req, res, next) {
        // Bước 1: Lấy phần tử chốt là phần tử ở cuối danh sách.
        // Bước 2: Chia mảng theo phần tử chốt.
        // Bước 3: Sử dụng sắp xếp nhanh một cách đệ qui với mảng con bên trái.
        // Bước 4: Sử dụng sắp xếp nhanh một cách đệ qui với mảng con bên phải.

        // Độ  phức tạp thuật toán của quick sort:
        // Trường hợp tốt: O(nlog(n))
        // Trung bình: O(nlog(n))
        // Trường hợp xấu: O(n^2)
        // Không gian bộ nhớ sử dụng: O(log(n))

        var arr = [234, 43, 55, 63, 5, 6, 235, 547];
        let result = quickSort(arr, 0, arr.length - 1);
        let result1 = quickSortDev(arr, 0, arr.length - 1);

        res.status(200).json({ quickSortOngDev: result1, quickSort: result });
    }
    mergeSort(req, res, next) {
        var arr = [234, 43, 55, 63, 5, 6, 235, 547];

        let result = mergeSort(arr, arr, 0);
        res.status(200).json({ mergeSort: result });
    }
    heapSort(req, res, next) {
        var arr = [234, 43, 55, 63, 5, 6, 235, 547];

        let result = heapSort(arr);
        res.status(200).json({ heapSort: result });
    }

    index(req, res, next) {
        res.status(200).json('ok');
    }
}
module.exports = new ThuatToanController();
