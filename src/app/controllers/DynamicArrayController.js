const { Animals, Car } = require('../../common/abstract/base');

class DynamicArrayController {
    capacity = 0;
    size = 0;
    arr = [];

    DynamicArrayController(arr, capacity, size) {
        this.arr = arr;
        this.capacity = capacity;
        this.size = size;
    }

    DynamicArrayController() {
        this((capacity = 10));
    }

    DynamicArrayController(capacity) {
        if (capacity < 0) throw new Error('Required');
        this.opacity = opacity;
        arr = new Object[capacity]();
    }
    sizeArray() {
        return this.size;
    }
    isEmpty() {
        return !(sizeArray() == 0);
    }
    get(index) {
        return this.arr[index];
    }
    set(index, element) {
        arr[index] = element;
    }
    clear() {
        for (let i = 0; i < size; i++) {
            arr[i] = null;
        }
        size = 0;
    }
    //add element vào đàng sau, nếu element gần tràn thì phải nạp thêm length
    add(element) {
        let newArr = [];
        if (this.size >= this.capacity - 1) {
            if (this.capacity == 0) this.capacity = 1;
            else {
                this.capacity *= 2;
            }

            for (let i = 0; i < this.arr.length; i++) {
                newArr[i] = this.arr[i];
            }

            this.arr = newArr;
        }
        this.arr[this.size++] = element;
    }
    print() {
        return this.arr.join('');
    }

    removeAt(removeIndex) {
        if (removeIndex >= size || removeIndex < 0) {
            throw new Error('Required');
        }
        newArr = new Object[size - 1]();

        for (let oldArrIndex = 0, newArrIndex = 0; oldArrIndex < size; oldArrIndex++, newArrIndex++) {
            if (oldArrIndex == removeIndex) newArrIndex--;
            else newArr[newArrIndex] = arr[oldArrIndex];
        }
        arr = newArr;
        capacity = --size;
    }
    iphone7() {
        let name = 'Le Van Hieu';
        let color = 'pink';
    }
    index(req, res, next) {
        const array = new DynamicArrayController();
        array.add('H');
        array.add('I');
        array.add('E');
        array.add('U');
        let value = array.get(1);

        let clara = new Cats('Clara', 33, 'indigo');
        let MeoDen = new Cats('MeoDen', 331, 'MeoDen');

        let mercsedesS450 = new Car('mercsedesS450', 'black', 100212);
        let mercsedesDen = new Car('mercsedesDen', 'Hong', 1213000);
        let mercsedesWhite = new Car('mercsedesWhite', 'Hong', 1321000);
        let mercsedesBlack = new Car('mercsedesBlack', 'Hong', 1211213000);

        let getRun = mercsedesDen.run.bind(mercsedesWhite);
        let getName = mercsedesDen.run.bind(mercsedesBlack);

        res.status(200).json({
            array: array.print(),
            value,
            clara: clara.sing(),
            MeoDen: MeoDen.dance(),
            whiskers: MeoDen.whiskers(),

            mercsedesS450: mercsedesS450.run(),
            mercsedesDen: getRun('ok', 'red', 222),
            mercsedesDen1: getName('ok', 'em'),
        });
    }
}
//*this
// Arrow function không có context không có this - Nên sẽ trả về cái this ở phía ngoài
// Trong một phương thức. this tham chiếu tới đối tượng truy cập phương thức đó trước dấu chấm
// Đứng ngoài phương thức, this them chiếu đến đối tượng global
// Sử dụng bind, call, apply sẽ chỉ this tới một đối tượng khác mà người dùng mong muốn

//*bind
//Phương thứ bind và truyền this mới vào thì nó ko hề sửa
//mà sẽ return về một hàm mới và một cái this mới là đối số được truyền vào
//C
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        //Để có thể kế thừa được thì dùng thêm quyền supper
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}

module.exports = new DynamicArrayController();
