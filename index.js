'use strict'

function BaseClass(n) {
    this.data = n;
}

BaseClass.prototype.plus = function (...arg) {
    this.data = arg.reduce((accumulator, currentValue) => accumulator + currentValue, this.data);
    return this;
}

BaseClass.prototype.get = function () {
    return this.data;
}

class IntBuilder extends BaseClass {

    constructor(n) {
        super(n);
    }

    minus(...arg) {
        this.data -= arg.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return this;
    }

    multiply(n = 1) {
        if (typeof n === "number") {
            this.data *= n;
        }
        return this;
    }

    divide(n = 1) {
        if (typeof n === "number") {
            this.data = Math.floor(this.data / n);
        }
        return this;
    }

    mod(n = 1) {
        if (typeof n === "number") {
            this.data %= n;
        }
        return this;
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
}

//
//
// IntBuilder.random(10, 100);          // 42;
//
// let intBuilder = new IntBuilder(10); // 10;
// intBuilder
//     .plus(2, 3, 2)                     // 17;
//     .minus(1, 2)                       // 14;
//     .multiply(2)                       // 28;
//     .divide(4)                         // 7;
//     .mod(3)                            // 1;
//     .get();                            // -> 1;
