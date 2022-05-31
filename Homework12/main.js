// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//  let div = document.createElement('div');
// div.classList.add('div');
// document.body.appendChild(div);
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(todoList => {
//         for (const element of todoList) {
//             let post = document.createElement('div');
//             let userId = document.createElement('div');
//             let  id= document.createElement('div');
//             let  title= document.createElement('div');
//             let  body= document.createElement('div');
//
//             userId.innerHTML = `<li> ${element.userId} </li>`;
//             id.innerHTML = `<li> id ${element.id}</li>`;
//             title.innerHTML = `<li> title ${element.title} </li>`;
//             body.innerHTML = `<li> body ${element.body}</li>`;
//
//            post.append(userId,id,title,body);
//
//            post.classList.add('post');
//
//             div.appendChild(post);
//
//         }
//
//         });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(todoList => {
        for (const element of todoList) {
            let div = document.createElement('div');
            let comment = document.createElement('div');
            let li = document.createElement('li');
            let postId = document.createElement('div');
            let  id= document.createElement('div');
            let  email= document.createElement('div');
            let  body= document.createElement('div');

            postId.innerHTML = `postId ${element.postId}`;
            id.innerHTML = ` id ${element.id}`;
            email.innerHTML = `email ${element.email} `;
            body.innerHTML = `body ${element.body}`;

            comment.append(postId,id,email,body);
            li.append(comment);
            div.append(li);
            document.body.append(div);

        }
    });