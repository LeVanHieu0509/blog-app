class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}

class Car {
    constructor(name, color, weight) {
        this.name = name;
        this.color = color;
        this.weight = weight;
    }
    run() {
        console.log(this);
        return `${this.name} can running`;
    }
    getName(data1, data2) {
        return data1 + data2;
    }
}

module.exports = { Animals, Car };
