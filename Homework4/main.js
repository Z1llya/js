// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function s(a,b){
//     let result = 0;
//     result= a*b;
//     return result;
// }
// s(10,20);

// створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function s_circle(r){
//     let result = 3.14*r*r;
//     return result;
// }
// s_circle(4);

// // створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function s_cilindr(h,r){
//     let result= 2*3.14*r*r + 2*3.14*r*h;
//     return result;
// }
// s_cilindr(4,3);

// // створити функцію яка приймає масив та виводить кожен його елемент
//
// let mass = [1,2,3,4,5];
//
// function massive(array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement}</div>`);
//
//     }
// }
// massive(mass);

// // створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function text(text){
//     let result = document.write(`<p>${text}</p>`);
//
//
// }
// text("hello");

// // створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function ul(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//
//     document.write(`</ul>`)
//
// }
// ul("hello");

// // створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function txt_ul(text,amount) {
//     document.write(`<ul>`)
//     for (i=0;i<amount;i++){
//         document.write(`<li>${text}</li>`);
//     }
//
//     document.write(`</ul>`)
//
// }
// txt_ul("hello",6);

// // створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let mass = [1,2,'hello',3,false];
//
// function massive(array){
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
// function mass(objects) {
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
// function min_mass(array) {
//     let min =array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<min){
//             min = array[i];
//         }
//     }
//     return min ;
// }
// let a= min_mass(massive);
// console.log(a);

// // створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let mass= [1,2,3,4,5];
// function summ(array) {
//     let result = 0;
//     for (const arrayElement of array) {
//         result +=arrayElement;
//     }
//
//     return result;
//
// }
// let a = summ(mass);
// console.log(a);