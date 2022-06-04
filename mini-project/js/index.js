// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули



fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let div = document.createElement('div');
        div.classList.add('div');
        for (const element of value) {
            let array = [];
            let id = element.id;
            let name = element.name;
            let user = {id,name};

            let button = document.createElement('button');
            button.innerText = 'click';

            let userDiv = document.createElement('div');
            userDiv.innerHTML = `Name: ${name} <p> Id: ${id}`;
            userDiv.classList.add('userBlock');
            userDiv.append(button);

            button.onclick = function (e){
                array.push(user);
                localStorage.setItem('user',JSON.stringify(array));
                location.href = 'user-details.html';
            }


            document.body.append(div);
            div.append(userDiv);
        }



    })