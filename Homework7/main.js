// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function  User (id,userName,userSurname,email,phone){
//     this.id = id;
//     this.userName = userName;
//     this.usersurname = userSurname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,"vlad","per","dslglsg.gmail.com",00554334);
// let user2 = new User(2,"maks","pedsfr","dslglsg.gmail.com",00554334);
// let user3 = new User(3,"olya","pesg","dslglsg.gmail.com",00554334);
// let user4 = new User(4,"fort","persdf","dslglsg.gmail.com",00554334);
// let user5 = new User(5,"alla","psfger","dslglsg.gmail.com",00554334);
// let user6 = new User(6,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user7 = new User(7,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user8 = new User(8,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user9 = new User(9,"kolya","pedsfr","dslglsg.gmail.com",00554334);
// let user10 = new User(10,"kolya","pedsfr","dslglsg.gmail.com",00554334);
//
//
// let push = function(...User) {
//     let container = [];
//     container.push(...User);
//     return container;
// }
// let Users = push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(Users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filtr = Users.filter(value => value.id %2===0);
// console.log(filtr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = Users.sort((a,b)=> a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, clientName, clientSurname, email, phone, order) {
//         this.id = id;
//         this.clientName = clientName;
//         this.clientSurname = clientSurname;
//         this.email = email;
//         this.phone = phone;
//         this.order= order;
//     }
// }
// let array =[];
// let push = function(...Client) {
//    let container = [];
//    container.push(...Client);
//     return container;
// }
// let user1 = new Client(1,"vlad","per","dslglsg.gmail.com",'00554334'    ,['books','phone']);
// let user2 = new Client(2,"maks","pedsfr","dslglsg.gmail.com",'00554334' ,['books','phone','pc']);
// let user3 = new Client(3,"olya","pesg","dslglsg.gmail.com",'00554334'  ,['books']);
// let user4 = new Client(4,"fort","persdf","dslglsg.gmail.com",'00554334' ,['books','phone','pc']);
// let user5 = new Client(5,"alla","psfger","dslglsg.gmail.com",'00554334' ,['books','phone']);
// let user6 = new Client(6,"kolya","pedsfr","dslglsg.gmail.com",'00554334',['books','phone','pc']);
// let user7 = new Client(7,"kolya","pedsfr","dslglsg.gmail.com",'00554334',['books']);
// let user8 = new Client(8,"kolya","pedsfr","dslglsg.gmail.com",'00554334',['books','phone']);
// let user9 = new Client(9,"kolya","pedsfr","dslglsg.gmail.com",'00554334',['books','phone','pc']);
// let user10 = new Client(10,"kolya","pedsfr","dslglsg.gmail.com",'00554334', ['notebook','mouse']);
//  let Clients = push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
//  let sort = Clients.sort((a,b)=>a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car (model,producer,year,maxSpeed,engine,vodiy){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function(){
//          return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//     };
//     this.info = function (){
//         return `
//         model - ${this.model}
//         producer - ${this.producer}
//         year - ${this.year}
//         maxSpeed - ${this.maxSpeed}
//         engine - ${this.engine}`;
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         return this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function (newValue){
//         return this.year = newValue;
//     };
//     this.addDriver = function (driver){
//         return this.vodiy = driver;
//
//     }
//
//
//
//
//
// }
// let driver1 = {
//     name:"Illya",
//     age : 45
// }
// let car1 = new Car('c','mersedes',2015,200,195);
// console.log(car1.increaseMaxSpeed(250));
// console.log(car1.addDriver(driver1));
// console.log(car1);
// console.log(car1.info());
//

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car {
//
//     constructor(model, producer, year, maxSpeed, engine, vodiy) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//     };
//
//     info() {
//         return `
//         model - ${this.model}
//         producer - ${this.producer}
//         year - ${this.year}
//         maxSpeed - ${this.maxSpeed}
//         engine - ${this.engine}`;
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed = newSpeed;
//     };
//
//     changeYear(newValue) {
//         return this.year = newValue;
//     };
//
//     addDriver(driver) {
//         return this.vodiy = driver;
//
//     };
//
// }
// let driver1 = {
//     name:"Illya",
//     age : 45
// }
// let car1 = new Car('c','mersedes',2015,200,195);
// console.log(car1.increaseMaxSpeed(250));
// console.log(car1.addDriver(driver1));
// console.log(car1);
// console.log(car1.info());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// class Cindrellas {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let cindrella1 = new Cindrellas("Olya1",19,38);
// let cindrella2 = new Cindrellas("Olya2",19,39);
// let cindrella3 = new Cindrellas("Olya3",19,37);
// let cindrella4 = new Cindrellas("Olya4",19,41);
// let cindrella5 = new Cindrellas("Olya5",19,35);
// let cindrella6 = new Cindrellas("Olya6",19,36);
// let cindrella7 = new Cindrellas("Olya7",19,42);
// let cindrella8 = new Cindrellas("Oly8",19,43);
// let cindrella9= new Cindrellas("Olya9",19,44);
// let cindrella10 = new Cindrellas("Olya",19,40);
//
// let push = function(...Cindrellas) {
//     let container = [];
//     container.push(...Cindrellas);
//     return container;
// };
//
// let mass =  push(cindrella1,cindrella2,cindrella3,cindrella4,cindrella5,cindrella6,cindrella7,cindrella8,cindrella9,cindrella10);
//
// class Prince {
//     constructor(name, age, sizeOfShoe) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfShoe = sizeOfShoe;
//     }
// }
// let prince1 = new Prince("Alex",20,38);
//
// for (let i = 0; i < mass.length; i++) {
//     const girl = mass[i];
//     if (girl.size === prince1.sizeOfShoe){
//         console.log(`${girl.name} true`);
//     }
//
// }
// let find = mass.find(value => value.size ===prince1.sizeOfShoe);
// console.log(find);
