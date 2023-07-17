// **************************************** Практика  9 ****************************** //

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки прискорення в системі круїз контролю.
// const car = {
//     speed: 0,
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0){
//             console.log('Авто зупинилось');
//             return
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed}`);
//     }
// }

// const car2 = {
//     brand: 'BMW',
//     speed: 40,
//     // accelerate: car.accelerate
// }

// const car3 = {
//     brand: 'Volvo',
//     speed: 70,
// }

// const bmw = car.accelerate.bind(car2);
// const bmwDecrease = car.decrease.bind(car2);
// const volvo = car.accelerate.bind(car3)

// bmw()
// bmw()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// for (let i = 0; i < 8; i += 1) {
//     bmw()
// }

|============================

// Task - 2
// Потрібно створити систему для продажу в інтернет магазині.
// Є об'єкт продукта в якому потрібно створити метод discount(буде приймати знижку клієнта в %) який буде повертати вартість товара з врахуванням знижки
// Є об'єкт клієнта який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунки вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//     name: "Smartphone",
//     price: 500,
//     discount(percent) {
//         return this.price * (100 - percent) / 100
//     }
// };

// const client = {
//     name: "Alice",
//     discountPercent: 11,
//     purchase() {
//         const price = product.discount(this.discountPercent);
//         console.log(`${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}грн`);
//     }
// };

// const client2 = {
//     name: 'Kate',
//     discountPercent: 4,
// }

// const client3 = {
//     name: 'Mark',
//     discountPercent: 0,
// }
// client.purchase.call(client2);
// client.purchase.call(client3);
// client.purchase();

|============================
    
// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

const tesla = {
    brand: "Tesla",
    speed: 70,
};

const audi = {
    brand: 'Audi',
    speed: 70,
}

// function speedSensor(maxSpeed) {
//     // if (this.speed <= maxSpeed) {
//     //     console.log(`Автомобіль ${this.brand} рухається з безпечною швидкістю`);
//     //     return;
//     // }
//     // console.log(`${this.brand} - Перевищено безпечну швидкість! 😨`);


//     return this.speed <= maxSpeed ? `Автомобіль ${this.brand} рухається з безпечною швидкістю`: `${this.brand} - Перевищено безпечну швидкість! 😨`

// }
// console.log(speedSensor.call(audi, 70));

// console.log(speedSensor.call(tesla, 70));


|============================

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     read(a = 0, b = 0) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0)
//     },
//     mult() {
//         return (this.a ?? 1) * (this.b ?? 1)
//     }
// };
// calculator.read(3,4)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// ||

// 6 false значень
// 0
// ''
// NaN
// undefined
// null
// false

// console.log(1 || 'Hello');
// console.log(0 || false);
// console.log(false || NaN);


// ??
// null
// undefined

// console.log(false ?? 'hello');
// console.log(null ?? 'hello');
// console.log(undefined ?? 'hello');
// console.log(null ?? undefined);
// console.log(undefined ?? null);


// const person = {
//     name: 'Alice',
//     skills: ['html', 'ajax',
//         'js', 'css', 'react', 'node'],
//     sortSkills() {
//         this.skills.sort((a, b) => a.localeCompare(b))
//     }
// }
// person.sortSkills()
// console.log(person);


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const oddNumbers = numbers.filter(number => number % 2); //1 //0 //1


// **************************************** Практика  9 ****************************** //

// Task-1
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також публічні гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//     #width;
//     #height;
//     constructor({ width, height } = {}) {
//         this.#width = width;
//         this.#height = height
//     }
//     get width() {
//         return this.#width;
//     }
//     set width(newWidth) {
//         if (typeof newWidth === 'number' && newWidth > 0) {
//             this.#width = newWidth;
//         } else {
//             console.log('Ширина повинна бути числом більше за 0');
//         }
//     }

//     get height() {
//         return this.#height;
//     }

//     set height(newHeight) {
//         if (typeof newHeight === 'number' && newHeight > 0) {
//             this.#height = newHeight;
//         } else {
//             console.log('Висота повинна бути числом більше за 0');
//         }
//     }
// }
// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.width); // get
// item.width = 12 // set
// console.log(item.width); //get

|============================

// Task-2
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }
//     getFullName() {
//         return `${this.#name} ${this.#surname}`
//     }
// }


// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname)
//         this.year = year;
//     }
//     getCourse() {
//         const today = new Date();
//         const currentYear = today.getFullYear()
//         const diff = currentYear - this.year;

//         if (currentYear < this.year) {
//             return;
//         }

//         if (diff > 5) {
//             return 'Студент являєтсья випускником';
//         }

//         return `${diff} курс`;
//     }
// }


// const student = new Student('Петрик', 'Пяточкин', 2018);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse());   //поверне 4

|============================
    
// Task-3
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість _balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому _balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//     #balance
//     constructor() {
//         this.#balance = 0;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.#changeBalance(amount);
//             console.log(`Здійснено депозит ${amount}`);
//             return;
//         }

//         console.log(`Сума має бути більша за 0`);
//     }
//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log(`Сума має бути більша за 0`);
//         } else if (amount > this.#balance) {
//             console.log('Недостатньо коштів на рахунку');
//         } else {
//             this.#changeBalance(-amount);
//             console.log(`Знято ${amount}`);
//         }
//     }
//     #changeBalance(amount) {
//         this.#balance += amount;
//     }
// }


// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1000)
// console.log(instance);

|============================

// // Task-4
// // Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// // Також створи функціонал для підрахунку створених героїв

// // Властивість name має зберігати ім'я героя.
// // Властивість level має зберігати рівень героя.
// // Властивість health має зберігати поточний рівень здоров'я героя.
// // Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.



// class Hero {
//     static counter = 0;
//     static addHero() {
//         this.counter += 1;
//         console.log('Кількість героїв ', this.counter);
//     }

//     #level;
//     constructor(name) {
//         this.name = name;
//         this.#level = 1;
//         this.health = 200;
//         Hero.addHero();
//     }

//     attack() {
//         console.log(`Attack with 10 damage`);
//     }

//     heal() {
//         this.health += 10;
//     }
// }

// const bloodseker = new Hero('Bloodseker');
// const bloodseker2 = new Hero('Bloodseker');
// const bloodseker3 = new Hero('Bloodseker');
// const bloodseker4 = new Hero('Bloodseker');
// const bloodseker5 = new Hero('Bloodseker');
// const bloodseker6 = new Hero('Bloodseker');

// console.log(bloodseker.heal());
// console.log(bloodseker);
// console.log(Hero.counter);