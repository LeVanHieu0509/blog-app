function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Lesson1
function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place
        for (var j = 0; j < arr.length - i - 1; j++) {
            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true then swap them
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//lesson2
function insertionSort(arr) {
    let current, j;
    for (var i = 1; i < arr.length; i++) {
        current = arr[i];
        j = i - 1;
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Place key at after the element just smaller than it.
        arr[j + 1] = current;
    }
    return arr;
}

//lesson 3 (Quick sort co 2 cach)
function partitionDev(arr, low, high) {
    if (arr == null || arr.length == 0) return;
    if (low >= high) return;
    let pivot = arr[low];
    i = low;
    j = high;

    while (i <= j) {
        while (arr[j] > pivot) {
            j--;
        }
        while (arr[i] < pivot) {
            i++;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSortDev(arr, left, right) {
    let index = partitionDev(arr, left, right); //index returned from partition

    if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(arr, left, index - 1);
    }
    if (index < right) {
        //more elements on the right side of the pivot
        quickSort(arr, index, right);
    }

    return arr;
}

// *Với phân đoạn không cân bằng: Khi trường hợp xấu nhất xảy ra (pivot là phần tử đầu và dãy đã được sắp xếp nhanh),
// độ phức tạp của thuật toán Quick Sort sẽ là O(n^2). Tại thời điểm đó, mảng không được chia thành bất kỳ phần nào cả,
// 2 bài toán con lần lượt có kích thước là n-1 và 0.
// *Với phân đoạn hoàn hảo: Mỗi bài toán con có kích thước là n/2.
//Mảng cũng được phân thành hai phần bằng nhau. Độ phức tạp lúc này là O(nlogn).
// *Với phân đoạn cân bằng: Một bài toán con có kích thước là n-k,
//bài còn lại có kích thước là k. Độ phức tạp lúc này là O(n).

//ham phan manh
function partition(arr, low, high) {
    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr;
}

//Merge sort
function mergeSortedArrays(originArray, leftSortedArray, rightSortedArray, startIndex) {
    var sortedArray = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;

    while (leftArrIndex < leftSortedArray.length && rightArrIndex < rightSortedArray.length) {
        //create 3 variant
        let leftMinValue = leftSortedArray[leftArrIndex];
        let rightMinValue = rightSortedArray[rightArrIndex];
        let minimumValue = 0;

        if (leftMinValue <= rightMinValue) {
            minimumValue = leftMinValue;
            leftArrIndex++;
        } else {
            minimumValue = rightMinValue;
            rightArrIndex++;
        }
        sortedArray.push(minimumValue);
    }
    if (leftArrIndex < leftSortedArray.length) {
        sortedArray = sortedArray.concat(leftSortedArray.slice(leftArrIndex));
    }
    if (rightArrIndex < rightSortedArray.length) {
        sortedArray = sortedArray.concat(rightSortedArray.slice(rightArrIndex));
    }

    return sortedArray;
}
function mergeSort(originArray, array, startIndex) {
    if (array.length < 2) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle, array.length);

    var leftSortedArray = mergeSort(originArray, leftArray, startIndex);
    var rightSortedArray = mergeSort(originArray, rightArray, startIndex + leftSortedArray.length);

    return mergeSortedArrays(originArray, leftSortedArray, rightSortedArray, startIndex);
}

//HeapSort
function heapify(arr, length, index) {
    let largestIndex = (lastLargestIndex = index);

    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < length && arr[left] > arr[largestIndex]) {
        largestIndex = left;
    }
    if (right < length && arr[right] > arr[largestIndex]) {
        largestIndex = right;
    }
    if (largestIndex != index) {
        swap(arr, index, largestIndex);
        heapify(arr, length, largestIndex);
    }
}

function heapSort(arr) {
    let length = arr.length;
    let lastParentNode = Math.floor(length / 2 - 1);

    while (lastParentNode >= 0) {
        heapify(arr, length, lastParentNode);
        lastParentNode--;
    }
    for (let i = length - 1; i >= 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }

    return arr;
}

//Radix sort (Bắt đầu từ hàng đơn vị)

const getNum = (num, index) => {
    const strNum = String(num);
    let end = strNum.length - 1;
    const foundNum = strNum[end - index];

    if (foundNum === undefined) return 0;
    else return foundNum;
};

function largestNum(arr) {
    let largest = '0';

    arr.forEach((num) => {
        const strNum = String(num);

        if (strNum.length > largest.length) largest = strNum;
    });

    return largest.length;
}

function RadixSort(arr) {
    //Vị trí max trong từng con số của mảng (Ví dụ 3240 = 4, 345 = 3)
    let maxLength = largestNum(arr);

    //Không gian 2 chiều mỗi vòng lặp i sẽ tương ứng với 1 array được tạo ra, array được tạo ra là buckets có độ dài là 10
    for (let i = 0; i < maxLength; i++) {
        //Mỗi element như là một arr có 10 phần tử
        let buckets = Array.from({ length: 10 }, () => []);

        //loop qua arr ban đầu
        for (let j = 0; j < arr.length; j++) {
            //Tìm vị trí mà match với arr[j] nếu có thì sẽ được push vào buckets
            //Từng element của arr sẽ tương ứng với từng vị trí của buckets[num]
            let num = getNum(arr[j], i);
            //Ở index thứ num của buckets là một mảng
            //sẽ push những phần từ arr[j] vào mảng buckets tại vị trí buckets[num]
            if (num !== undefined) buckets[num].push(arr[j]);

            //Lặp qua tất cả các phần tử arr thì mỗi phần từ arr sẽ vào với đúng vị trí của buckets
        }

        //Sau khi có buckets rồi thì làm phẳng lại thành 1 mảng mới
        arr = buckets.flat();
    }
    //Chạy hết tất cả thì sẽ return ra mảng cuối cùng
    return arr;
}

module.exports = { swap, bblSort, insertionSort, quickSort, quickSortDev, mergeSort, heapSort, RadixSort };
