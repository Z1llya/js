// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
//
// const parag = document.getElementById('content');
// console.log(parag.innerText);

// -- отримує текст з блоку з id "rules"
//
// const div = document.getElementById('rules');
// console.log(div.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// const parag = document.getElementById('content');
// parag.innerText = 'asdadsd';
// console.log(parag);
//

// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// const parag = document.getElementById('rules');
// parag.innerText = 'fgkgkggj';
// console.log(parag);


// -- змініть кожному елементу колір фону на червоний
//
// const parag = document.getElementById('content');
// const div = document.getElementById('rules');
// const ul = document.getElementsByTagName('ul');
//
// parag.style.backgroundColor= 'red';
// div.style.backgroundColor = 'red';
// for (let i = 0; i < ul.length; i++) {
//     const ulElement = ul[i];
//     ulElement.style.backgroundColor = 'red';
//
// }

// -- змініть кожному елементу колір тексту на синій
//
// const parag = document.getElementById('content');
// const div = document.getElementById('rules');
// const ul = document.getElementsByTagName('ul');
//
// parag.style.color = 'blue';
// div.style.color = 'blue';
// for (let i = 0; i < ul.length; i++) {
//     const ulElement = ul[i];
//     ulElement.style.color = 'blue';
//
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// const rules = document.getElementById('rules');
// console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
//
// const fc_rules = document.getElementsByClassName('fc_rules');
//
// for (let i = 0; i < fc_rules.length; i++) {
//     const fcRule = fc_rules[i];
//     fcRule.style.color = 'yellow';
//
// }

//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
//
// const classId = document.getElementById('main_header');
// classId.classList.add('Group1');

// b) робить шириниу елементу ul 400px
//
// const elementUl = document.querySelector('ul');
// elementUl.style.width = "400px";


// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const linklist = document.querySelectorAll('.linkList');
// for (let i = 0; i < linklist.length; i++) {
//     const linklistElement = linklist[i];
//     linklistElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// const listlement2 = document.querySelector('.listElement2');
// let text = listlement2.innerText;
// console.log(text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const all = document.querySelectorAll('li');
// for (let i = 0; i < all.length; i++) {
//     const allElement = all[i];
//     allElement.style.backgroundColor = 'gray';
//
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// const elements = document.querySelectorAll('a');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.classList.add('anchor');
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// const elements = document.querySelectorAll('a');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     if(element.innerText === 'link3' ){
//         element.style.fontSize = '100px';
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// const elements = document.querySelectorAll('a');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.classList.add(`element_${element.innerText}`);
//
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const elements = document.querySelectorAll('.sub-header');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.style.backgroundColor = prompt('enter a color');
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// const elements = document.querySelectorAll('.sub-header');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     if(element.innerText === 'content 2 segment'){
//         element.style.color = prompt('enter a color');
//     }
//
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// const element = document.querySelector('.content_1');
// element.innerText = prompt('enter text');
//

// l) отримати елементи p та змінити їм padding на 20px
//
// const elements = document.querySelectorAll('p');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.style.padding = '20px';
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// const elements = document.querySelectorAll('.text2');
// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.innerText = 'mar-2022';
//
// }

//
