
// **************************************** Практика  1 ****************************** //

// // Task - 1

// // Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// // const  appleMessage = `${apple} total cost ${appleQuantity * applePrice}`
// // console.log(appleMessage);
// const lemon = '🍋';

// const lemonQuantity = 3;

// const lemonPrice = 72;

// // const lemonMessage = lemon + ' total cost ' + (lemonQuantity + lemonPrice)
// // console.log(lemonMessage);
// // const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);
// const result = `Total ${(applePrice * appleQuantity) + (lemonQuantity * lemonPrice) + (cherryQuantity * cherryPrice)}`

// console.log(result);

|============================
    
// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result);
    
|============================
    
// // Task - 3

// // Виконай рефакторинг коду щоб уникнути помилок

// // const name = 'Harry'
// // const message = `Hello my name is ${name}`
// // console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;

// console.log(message);

|============================

// // Task - 4
// // Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// // const incomingValue = 0;
// // const defaultValue = 10;
// // const value = null ?? defaultValue;
// // console.log(value);


// // const KEY_AUTHORIZATION = 'qwerty111';
// // console.log(KEY_AUTHORIZATION);



// **************************************** Практика 2 ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful


// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }

// if (message === 'red') {
//     action = 'stop';
// } else if (message === 'yellow') {
//     action = 'ready';
// } else if (message === 'green') {
//     action = 'go';
// } else {
//     action = 'be careful';
// }

// console.log(action);
// console.log(message);
    
|============================
    
// Task - 2
// Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }

// switch (message) {
//     case 'red':
//         action = 'stop';
//         break;
//     case 'yellow':
//         action = 'ready'
//         break;
//     case 'green':
//         action = 'go';
//         break;
//     default:
//         action = 'be careful';
// }

// console.log(action);

|============================
    
// Task - 3
// Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 правильна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//     // console.log(answer);
//     let message = prompt(text);
//     if (message){
//         message = message.toLowerCase();
//     }

//     return message === answer;
// }
// const result = check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк');
// console.log(result);
// check('Через воду він проводить, А сам з місця вік не сходить', 'міст')
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

|============================

// Task - 4
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while (total < deps) {
//         total += daySpeed;
//         days += 1;

//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }
// getDays(42)

|============================
    
// // Task - 5
// // Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             counter += 1
//         }
//     }

//     return counter;
// }
// console.log(countVowel("HELLO WORLD")) // 3
// // console.log(countVowel("Junior Web Developer")) // 8