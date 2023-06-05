// Задание 1

// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

function Life(city, country) {
    this.city = city;
    this.country = country;
    this.func = function() {
        console.log(`${this.city}, ${this.country}`);
    }
}

const live = new Life('London', 'United Kingdom');
console.log(live);


// Задание 2

// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:

// sum() возвращает сумму введённых свойств.

// mul() возвращает произведение введённых свойств

class Calculator {
    constructor() {
        this.firstN = +prompt("Write first number");
        this.secondN = +prompt("Write second number");
    }

    sum() {
        console.log(`${this.firstN + this.secondN}`);
    }

    mul() {
        console.log(`${this.firstN * this.secondN}`);

    }
};

const calcResult = new Calculator();
calcResult.sum();
calcResult.mul();