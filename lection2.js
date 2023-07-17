
// **************************************** Практика  3 ****************************** //

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arrA = [3, 'Hello', null, 42, false];

// console.log(typeof null);
// for (let i = 0; i < arrA.length; i += 1) {
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//         i -= 1;
//     }
// }

// console.log(arrA);

// const arrA = [3, 'Hello', null, 42, false];

// [3, 'Hello', null, 42, false]

// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//     console.log(arrA[i]);
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//     }
// }
// console.log(arrA);
// const arrB = ['world', true, 22, 41, undefined];

|============================

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

|============================

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//     const women = [];

//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user)
//         }
//     }

//     return women
// }

// console.log(getWomen(users, men));

|============================


// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)
// console.log(result);

    |============================

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9]

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1];
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = numbers[i - 1] + 1;
//     }
// }
// console.log(numbers);
        
 |============================

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

     
// function createStr(arr) {
//     let message;
//     switch (arr.length) {
//         case 0:
//             message = "no one likes this"
//             break;
//         case 1:
//             message = `${arr[0]} likes this`
//             break;
//         case 2:
//             message = `${arr[0]} and ${arr[1]} like this`
//             break;
//         case 3:
//             message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//             break;
//         default:
//             message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//     }
//     return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));





// **************************************** Практика  4 ****************************** //


// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];
// Застосування функції

// function checkValue(arr, target) {
//     let message = "Success ✅";

//     for (const num of arr) {
//         if (target > num) {
//             message = "Fail ❌";
//         }
//     }

//     return message

// }
// console.log(checkValue(numbers, 10));

// console.log(checkValue(numbers, 13));

// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for (const num of arr) {
//         if (target > num){
//             return "Fail ❌";
//         }
//     }

//     return "Success ✅";
// }

// console.log(checkValue(numbers, 10));

// console.log(checkValue(numbers, 13));

|============================
     
// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [[1, 2], [3, 4],[5, 6],[7, 8]]

// function getCombination(arr, count) {
//     const result = [];

//     for (let i = 0; i < arr.length; i += count) {
//         const combination = arr.slice(i, i + count);
//         result.push(combination)
//     }

//     return result
// }
// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));
// console.log(getCombination(data, 1));

|============================

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const arr = dimensions.split(' ');
//     const firstValue = Number(arr[0]);
//     const secondValue = Number(arr[1]);

//     return firstValue * secondValue;
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));
     
|============================
    
// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     if (courses.includes(name)) {
//         return 'Ви вже маєте такий курс';
//     }
//     courses.push(name);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function removeCourse(name) {
//     const idx = courses.indexOf(name);
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

//     console.log('~', ~-1); // 0
//     console.log(-(-1 + 1)); // 0
//     // -(x + 1)
//     // -1 => true => 0 => false
//     //  0 => false => -1 true
//     if (!~idx) {  //idx + 1
//         console.log(name);
//         return "Курс із таким ім'ям не знайдено"
//     }

//     courses.splice(idx, 1)
// }
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// const courses = ['HTML', 'CSS', 'Express','JavaScript', 'React', 'PostgreSQL'];
// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);

//     if (~idx){
//         courses[idx] = newName;
//         return;
//     }

//     return "Курс із таким ім'ям не знайдено";
// }
// // updateCourse('HTML', 'NestJS');
// console.log(updateCourse('qwerty', 'NestJS'));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']