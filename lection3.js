// **************************************** Практика  4 ****************************** //
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     console.log('product', product);
//     // const basket = {
//     //     product, // product : 'pizza'
//     //     quantity,
//     //     price,
//     //     totalPrice
//     // }

//     // return basket;

//     return {
//         product,
//         quantity,
//         price,
//         totalPrice
//     }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));

|============================
    
// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//     const values = Object.values(obj);
//     let total = 0;
// console.log(values);
//     for (const value of values) {
//         total += value;
//     }

//     return `Count of players ${values.length}, average time ${total/values.length}`
// }

// console.log(getTime(players));

|============================
    
// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]

// function getTotalAge(arr) {
//     let totalAge = 0;

//     for (const user of arr) {
//         // console.log(user.name, 'age' in user);

//         if ('age' in user) {
//             console.log(`${user.name} - ${user.age}`);
//             totalAge += user.age
//         }
//         // if (user.hasOwnProperty('age')) {
//         //     totalAge += user.age
//         // }
//     }
//     console.log(totalAge);
// }
// console.log(getTotalAge(friends));

// const user = {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21
// }
// function getUsers(arr, bookName) {
//     const userNames = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             userNames.push(user.name);
//         }
//     }

//     return userNames.join(', ');
// }
// console.log(getUsers(friends, "Harry Potter"));

|============================

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     },
//     ],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Crabbe",
//         points: 5
//     },
//     ],
//     getUserList(faculty) {
//         if (!(faculty in this)) {
//             return 'Faculty not found 😥';
//         }
//         const students = [];
//         for (const student of this[faculty]) {
//             students.push(student.name);
//         }
//         return students.join(', ')
//     },
//     getTotalPoints(faculty) {
//         if (!(faculty in this)) { // ! HE
//             return 'Faculty not found 😥';
//         }
//         let totalPoints = 0;
//         for (const student of this[faculty]) {
//             if ('points' in student) {
//                 totalPoints += student.points;
//             }
//         }

//         return totalPoints;
//     }
// }

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));





// **************************************** Практика  6 ****************************** //

// Task - 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));

|============================

// Task - 2 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.



// function createContact(partialContact) {
//     return {
//         id: Math.random(),
//         createdAt: new Date(),
//         list: 'default',
//         ...partialContact
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

|============================

// Task - 3 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }


// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: ''
//     };

//     for (const key of keys) {
//         if (changeKeys.includes(key)) {
//             // result.fullName ? result.fullName += ` ${obj[key]}` : result.fullName = obj[key]
//             result.fullName += `${obj[key]} `
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     console.log(result);
// }

// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: `${obj.firstName} ${obj.lastName}`
//     };

//     for (const key of keys) {
//         if (!changeKeys.includes(key)) {
//             result[key] = obj[key]
//         }
//     }
//     return result;
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

|============================
    
// Task - 4 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//     const values = Object.values(stock)
//     let total = 0;

//     for(const value of values){
//         total += value
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"//



// const rgb = ['122', '180', '255'];
// const [, , blue] = rgb;


// console.log(`Blue ${' '}`); // Blue 255 // Blue  



// obj {
//   x: 2,
//   y {a: [  ], b: { a: 0, b: 1, с: 2 } }
//   z: {a: 0, b: 1, с: 2}
//     }

// function copyArr(arr){
//   var res = [];
//   for (var i in arr) { res.push(arr[i]); }
//   return res;
// }
// function copyObj(obj){
//   res = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'object') {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }

