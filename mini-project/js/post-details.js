// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let postArray = JSON.parse(localStorage.getItem('post'));

for (const element of postArray) {
    let postId = element.postId;
    let userId = element.userId;

    let div = document.createElement('div');
    let divBlock = document.createElement('div');
    divBlock.classList.add('divBlock');
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(value => value.json())
        .then(value => {
            let divInfo = document.createElement('div');
            div.innerHTML = `UserId: ${userId} <p> PostId: ${postId} <p> Title: ${value.title} <p> Body: ${value.body}`;
            div.append(divInfo);

        })

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(value => {

            let button = document.createElement('button');
            button.innerText = 'comments of current post';

            button.onclick = function (e){
                for (const element of value) {
                    let divComments = document.createElement('div');
                    divComments.classList.add('divComments');
                    divComments.innerHTML = `${element.body}`;
                    divBlock.append(divComments);
                    div.append(divBlock);
                }
            }
            div.append(button);



        })
    document.body.append(div);
}