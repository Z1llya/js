// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let userArray = JSON.parse(localStorage.getItem('user'));

for (const element of userArray) {
    let id = element.id;

    let div = document.createElement('div');
    div.classList.add('div');
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json())
        .then(value => {

            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerHTML = `Id: ${value.id} <p> 
            Name: ${value.name} <p> 
            UserName: ${value.username} <p> 
            Email: ${value.email} <p> 
            Address:<p>Street: ${value.address.street}<p> Suite: ${value.address.suite}<p> City: ${value.address.city}<p> Zipcode: ${value.address.zipcode}<p> Geo: <p> Lat: ${value.address.geo.lat}<p>  Lng: ${value.address.geo.lng} <p> 
            Phone: ${value.phone} <p> 
            Website: ${value.website} <p> 
            Company: <p>Name: ${value.company.name}<p> Catchphrase: ${value.company.catchPhrase} <p> Bs: ${value.company.bs}`;

            div.append(userDiv);
            document.body.append(div);

            let button = document.createElement('button');
            button.innerText = 'post of current user';
            button.classList.add('button');


            button.onclick = function (e) {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(value => value.json())
                    .then(value => {

                        // div.append(nameTitle);
                        let divBlock = document.createElement('div');
                        divBlock.classList.add('divBlock');
                        for (const element of value) {

                            let title = element.title;
                            let divTitle = document.createElement('div');
                            divTitle.classList.add('divTitle');
                            divTitle.innerHTML = `<ul><li>${title}</li></ul>`;



                            let buttonPost = document.createElement('button');
                            buttonPost.classList.add('buttonPost');
                            buttonPost.innerText = 'click';
                            buttonPost.onclick = function (e){
                                location.href = 'post-details.html';
                                let array = [];
                                let postId = element.id;
                                let userId = element.userId;
                                let post = {userId,postId};
                                array.push(post);
                                localStorage.setItem('post',JSON.stringify(array));
                            }
                            divTitle.append(buttonPost);
                            divBlock.append(divTitle);
                            div.append(divBlock);

                            // divTitle.append(buttonPost);
                            // divBlock.append(divTitle);
                            // div.append(divBlock);
                            // document.body.append(div);
                        }





                    })
            }

            userDiv.append(button);
        });


}





