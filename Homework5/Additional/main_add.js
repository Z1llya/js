//
// Всі функції повинні бути описані стрілочним типом!!!!
// //     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let min = (a,b,c) =>{
//     if (a<b && a<c){
//         return a;
//     }else if (b<c && b<a){
//         return b;
//     }else if (c<a && c<b){
//         return c;
//     }
// }
// console.log(min(5, 7, 3));

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let max = (a,b,c) =>{
//     if (a>b && a>c){
//         return a;
//     }else if (b>c && b>a){
//         return b;
//     }else if (c>a && c>b){
//         return c;
//     }
// }
// console.log(max(4, 8, 2));

// // - створити функцію яка повертає найбільше число з масиву
//
// let max = (array) =>{
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//        if (max<array[i])
//            max = array[i];
//
//     }
//     return max;
// }
// console.log(max([1, 2, 9, 4, 8, 6]));

// // - створити функцію яка повертає найменьше число з масиву
//
// let min = (array) =>{
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//        if (min>array[i])
//            min = array[i];
//
//     }
//     return min;
// }
// console.log(min([1, 2, 9, 4, 0, 6]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let summ = (array) =>{
//     let resault = 0;
//     for (const arrayElement of array) {
//         resault += arrayElement;
//     }
//     return resault;
// }
// console.log(summ([10, 4, 5]));

//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let resualt = (number) =>{
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//
//     }
// }
// resualt(5);

// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// let resault = (a,b) =>{
//     if (a<b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     }
//     else {
//         for(let i =a; b<=i;i--){
//             console.log(i);
//         }
//     }
// }
// resault(10,5);

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let swap = (array,i) =>{
//     let temp = array[i];
//     array[i]=array[i+1];
//     array[i+1]=temp;
//     return array;
// }
// console.log(swap([1, 2, 3, 4], 2));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
//
// let swap = (array) =>{
//     let mass=[];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]!==0){
//           mass.push(array[i]);
//         }
//     }
//     for (let i = 0; i < array.length; i++){
//         if (array[i]===0){
//             mass.push(array[i]);
//         }
//     }
//     return mass;
//
// }
//
//
// console.log(swap([0, 0, 1, 0]));