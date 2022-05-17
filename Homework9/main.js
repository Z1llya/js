// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
//
// let block  = document.createElement('div');
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// block.innerText = 'block';
//

// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// block.style.backgroundColor = 'gray';
// block.style.color = 'green';
// block.style.fontSize = '30px';

// // - додати цей блок в body.
//
// document.body.appendChild(block);

// // - клонувати його повністю, та додати клон в body.
//
// let clone1 = block.cloneNode(true);
// document.body.appendChild(clone1);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// const mass = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
// for (const element of mass) {
//     let htmlLi = document.createElement('li');
//     htmlLi.innerText = `${element}`;
//     ul.append(htmlLi);
// }
//



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.innerText = `${element.title}  ${element.monthDuration}`;
//     document.body.appendChild(block);
// }
//
//

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    div.classList.add('item');
//    let h1 = document.createElement('h1');
//    h1.classList.add('heading');
//    h1.innerText = `${element.title}`;
//    div.append(h1);
//    let p = document.createElement('p');
//    p.classList.add('description')
//    p.innerText = `${element.monthDuration}`;
//    div.append(p);
//    document.body.appendChild(div);
//
// }

//
