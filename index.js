//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");

// const question = prompt("Яка офіційна назва JavaScript?");
// console.log(question);
// if (question == "ECMAScript") {
//         alert ("Вірно!")
// } else {
//     alert ("Не знаєте? ECMAScript!")
// }
// console.log(alert);    


// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// const num = 70;
// const hours = Math.floor(num / 60);
// const modifiedHours = String(hours).padStart(2, 0);
// const min = num % 60;
// const modifiedMin = String(min).padStart(2, 0);
// console.log(`${modifiedHours}:${modifiedMin}`);
// console.log(modifiedHours);
// console.log(min);
// console.log(hours);

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.`;

//14.01.2023
//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const user of Object.key(user)) {
//     console.log (`${key}: ${user[key]}`);
// }
// Object.keys(user)

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function totalSalaries(objSalaries) {
//     let sum = 0;
//     for (const salari of Object.values(objSalaries)) {
//         sum += salari;
//     }
//     return sum;
// }
// console.log(totalSalaries(salaries));

// /Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//     const name = prompt('Введіть ваше імя');
//     if (!name) {
//         return;
//     }
//     callback(name);
// };
// const greet = name => {
//     console.log(`Привіт, ${name}!`);
// };
// letMeSeeYourName(greet);


//Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

// const makeProduct = (name, price, callback) => {
//     const product = {
//         name,
//         price,
//         id: Math.random(),
//     };
//     callback(product);
// };
// const showProduct = product => {
//     console.table(product);
// };

// console.log(makeProduct("tomato", 50, showProduct));

//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = shefName => {
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     };
// };
// const Mango = makeShef("Mango");
// console.dir(Mango);
// Mango("Salad.");
// const Poly = makeShef("Poly")
// Poly("Borsh.");








// users.map(value => value.name);
// console.log(users.map(value => value.name));

// const userName = users.map(value => value.name);
// console.log(userName);

// const userEyeColor = users.map((value) => value.eyeColor);
// console.log(userEyeColor);


// const getUsersByGender = (users, gender) => {
//     const usersNames = users.reduce((acc, user) => {
//         if (user.gender === gender) {
//             acc.push(user.name);
//         }
//         return acc;
//     }, []);
//     return usersNames;
// };
// console.log(getUsersByGender(users, "male"));



// const getUsersByAge = (users, min, max) => {
//     return users.reduce((acc, user) => {
//         if(user.age >= min && user.age < max) {
//         acc.push(user)
//     }
//     return acc;
// }, []);
// }
// console.log(getUsersByAge(users, 25, 50));


const getUsersByAge = (users, min, max) => {
    return users.reduce((acc, user) => {
        if(user.age >= min && user.age < max) {
        acc.push(user)
    }
    return acc;
}, []);
}
const getUsersByAgeFilter = (users, min, max) => users.filter(({ age }) => age >= min && age < max);
console.log(getUsersByAgeFilter(users, 25, 50));
