// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let calc_avarege = (array) =>{
//     let result = 0;
//     for (const arrayElement of array) {
//        result = arrayElement + result;
//     }
//     result =result/ array.length;
//     return result;
//
// }
//
// let mass= [1,2,3,4];
//
// console.log(calc_avarege(mass));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let calc = (arguments) =>{
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (min<item) min = item;
//         if (max>item) max = item;
//
//
//     }
//     console.log(max);
//     return min;
//
// }
// console.log(calc([1, 2, 3, 4, 5]));


// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let random = (array) =>{
//     let mass = [];
//     for (let i = 0; i <Math.round(Math.random()*10) ; i++) {
//         mass.push(Math.round(Math.random()*100));
//
//     }
//     return mass;
//
// }
// let mass =[];
// console.log(random(mass));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let random = (array,limmit) =>{
//     let mass = [];
//     for (let i = 0; i <Math.round(Math.random()*10) ; i++) {
//         mass.push(Math.round(Math.random()*limmit));
//
//     }
//     return mass;
//
// }
// let mass =[];
// console.log(random(mass,5));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse= (array) => {
// let mass = [];
//     for (let i = 0; i < array.length; i++) {
//
//        array[i]= mass.push(array[array.length-1-i]);
//
//
//     }
//     return mass;
// }
// console.log(reverse([1,2,3,4,5,6]));

// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//
// let rectangel = (a,b) => a*b;

// // створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let circle = (r) => 3.14*r*r;

// // створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cilindr = (h,r) => 2*3.14*r*r + 2*3.14*r*h;

// // створити функцію яка приймає масив та виводить кожен його елемент
//
// let mass = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// mass([1,2,3,4]);

// // створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let txt = (text) =>{
//     let result = document.write(`<p>${text}</p>`);
//
//
// }
// txt("hello");

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let ul = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
// }

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let txt_ul = (text,amount) => {
//     document.write(`<ul>`)
//     for (i=0;i<amount;i++){
//         document.write(`<li>${text}</li>`);
//     }
//
//     document.write(`</ul>`)
//
// }


//  створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let mass = [1,2,'hello',3,false];
//
// let massive = (array) =>{
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         document.write(`<li>${arrayElement}</li>`);
//
//     }
// document.write(`</ol>`);
//
// }
// massive(mass);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//     ]
//
// let mass = (objects) => {
//     for (const object of objects) {
//         document.write(`<div>${object.name} ${object.age} ${object.status}</div>`);
//
//     }
//
// }
// mass(users);

// // створити функцію яка повертає найменьше число з масиву
//
// let massive= [2,3,0,4,5];
//
// let min_mass = (array) => {
//     let min =array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<min){
//             min = array[i];
//         }
//     }
//     return min ;
// }
//
// console.log(min_mass(massive));

// // створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let mass= [1,2,3,4,5];
//let summ = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result +=arrayElement;
//     }
//
//     return result;
//
// }
// console.log(summ(mass));

// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     ];
//
// let revers = (object1) =>{
//     let temp = object1[0];
//     object1[0] = object1[object1.length-1];
//     object1[object1.length-1] = temp;
//     return object1;
// }
// console.log(revers(users));


