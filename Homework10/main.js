// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//
// let div = document.getElementById('text');
// let button = document.getElementById('butt');
// button.onclick = function (e){
//     div.hidden = true;
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let inputText = document.getElementById('txt');
// let inputButton = document.getElementById('butt');
//
// inputButton.onclick = function (e){
//      if(+inputText.value < 18){
//          alert('your age is less than 18');
//      }else {
//          alert('your age is ok');
//      }
// }

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
//
// let f1 = document.forms.f1;
// let f2 = document.forms.f2;
// let button = document.getElementById('butt');
// button.onclick = function (e){
//     let firstName = document.f1.firstName.value;
//     let lastName = document.f1.lastName.value;
//     let age = document.f2.age.value;
//     let gender = document.f2.gender.value;
//     console.log(firstName);
//     console.log(lastName);
//     console.log(age);
//     console.log(gender);
//     f1.firstName.value = '';
//     f1.lastName.value = '';
//     f2.age.value = '';
//     f2.gender.value = '';
// }



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let lines = document.getElementById('lines');
// let boxes = document.getElementById('boxes');
// let text = document.getElementById('txt');
// let button = document.getElementById('butt');
//
// button.onclick = function (e){
//     for (let i = 0; i < +lines.value; i++) {
//         let div = document.createElement('div');
//         div.style.display = 'flex';
//         for (let j = 0; j < boxes.value; j++) {
//             let div1 = document.createElement('div');
//             div1.innerText = `${text.value}`;
//             div.appendChild(div1);
//             div1.style.display = 'flex'
//             div1.style.border = "1px solid black";
//             div1.style.margin = '5px';
//             div1.style.width = '100px';
//             div1.style.height = '100px';
//             div1.style.alignItems = 'center';
//             div1.style.justifyContent = 'center';
//
//         }
//         document.body.appendChild(div);
//     }
//     }

