// **************************************** Практика  7 ****************************** //
// Task - 1
// Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = arr => arr.forEach((item, idx)=> console.log(`${idx + 1} - ${item}`))

// // logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

|============================
    
// Task - 2
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
// }

// // function logProduct(product) {
// //     console.log(`Product`, product);
// // }

// // function logTotalPrice({ price, quantity }) {
// //     console.log(`Product total price ${price * quantity}`);

// // }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

|============================
    
// Task - 3
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// function each(arr, action) {
//     const items = [];

//     arr.forEach(elem => {
//         const result = action(elem);
//         items.push(result);
//     })

//     // arr.forEach(elem => items.push(action(elem)))

//     return items
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

|============================
    
// Task-4
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.  У випадку помилки, викликається errorCallback і передається повідомлення про помилку.
// const products = [
//     {
//         id: 1,
//         name: "Телефон",
//         price: 10000,
//         description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//     },
//     {
//         id: 2,
//         name: "Ноутбук",
//         price: 25000,
//         description: "Легкий та потужний ноутбук для роботи та розваг.",
//     },
//     {
//         id: 3,
//         name: "Планшет",
//         price: 8000,
//         description: "Компактний планшет для перегляду контенту.",
//     },
// ];

// function getProductDetails(id, success, error) {
//     for (const product of products) {
//         if (product.id === id) {
//             return success(product); //some value;
//         }
//     }

//     error(id);
// }

// getProductDetails(3, handleSuccess, handleError)
// // getProductDetails(44, handleSuccess, handleError)

// function handleSuccess(message) {
//     console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//     console.log(`❌ Error! Product with ${productId} id not found`);
// }


// const arr = [1, 2, [5, 6, [2, 2]]];
// [1, 2]; // 18
// [5, 6]; //15
// [2, 2]; //4

// function add(arr) {
//     let total =0;
//     for (const value of arr) {
//         if (Array.isArray(value)) {
//             total += add(value)
//         } else {
//             total += value
//         }
//     }
//     return total;
// }

// console.log(add(arr));

// const arr = [1, 2, [5, 'hello', 6, [2, 'world', { a: 22, b: 25 }, 2]]];
// [1, 2]; // 18
// [5, 6]; //15
// [2, 2]; //4

// function add(arr) {
//     let total = 0;
//     for (const value of arr) {
//         if (Array.isArray(value)) {
//             total += add(value)
//         } else if (typeof value === 'number') {
//             total += value
//         } else if (typeof value === 'object') {
//             const values = Object.values(value);
//             total += add(values)
//         }
//     }
//     return total;
// }

// console.log(add(arr));




// **************************************** Практика  8 ****************************** //

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента. 

// const students = [
//     { name: 'John', grades: [80, 85, 90] },
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] }
// ];

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, item) => acc + item, 0)
//         const obj = {
//             name,
//             average: Math.round(total / grades.length)
//         }
//         return obj
//     });

//     return result;
// }
// console.log(getAverage(students));

|============================
    
// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років


// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult(arr) {
//     // const result = arr.filter((student) => student.age > 20)

//     // return result;

//    return arr.filter(({age}) => age > 20)

// }
// console.log(getAdult(students));

|============================

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title)
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];


// function getBook(arr, title) {
//     // const book = arr.find((book) => book.title === title);

// return book ? book : 'Not found'
//     // return book || 'Not found';


//   return arr.find(({title : bookTitle}) => bookTitle === title) || 'Not found';
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'qwerty'));

|============================
    
// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами. Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotal(arr) {
//     const total = arr.reduce((acc, product) => {
//         acc += product.price * product.quantity;
//         return acc;
//     }, 0)

//     return total;

//     // return arr.reduce((acc, { price, quantity }) => acc += price * quantity, 0)
// }
// console.log(getTotal(products));

|============================

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку. Результат повинен бути відсортованим масивом книжок за роком видання.


// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {
//     // const result = [...arr].sort((a, b) => b.year - a.year);
//     // return result;


//     return [...arr].sort((a, b) => b.year - a.year)
//     // .map(({ author, year }) => ({ author, year }));

// }
// console.log(sortDesc(books));

|============================
    
// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
//     { id: 4, name: 'Grapes', price: 3.99 }
// ];

// function getProducts(arr) {
//     // const min = arr.filter((product) => product.price < 2);
//     // const names = min.map((product) => product.name);
//     // names.sort((a, b) => a.localeCompare(b));

//     // return names

//     return arr.filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a,b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products);

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }
// const obj = str.split('')
//     .reduce((acc, item) => {
//         if (acc.hasOwnProperty(item)) { // item in acc
//             acc[item] += 1;
//         } else {
//             acc[item] = 1
//         }

//         return acc
//     }, {})

// console.log(obj);
