// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let js = 'javascript is cool';
//
// console.log(hello.length);
// console.log(lorem.length);
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let js = 'javascript is cool';
//
//
// console.log(hello.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let hello ='HELLO WORLD';
// let lorem = 'LOREM IPSUM';
// let js = 'JAVASCRIPT IS COOL';
//
// console.log(hello.toLowerCase());
// console.log(js.toLowerCase());
// console.log(lorem.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// let str = ' dirty string   ';
// let strNew = str.replaceAll(' ','');
// console.log(strNew);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = string => string.split(' ');
// console.log(stringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let mass = [10,8,-7,55,987,-1011,0,1050,0];
//
// let massTostring = mass.map(number => number.toString());
// console.log(massTostring);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// let sortNums = (array,direction) =>{
//     if (direction==='ascending'){
//         return array.sort((a,b) => a -b);
//     }
//     else if (direction==='descending')
//         return array.sort((a,b)=> b-a);
// }
//
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//
// let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
// ]
//
// let sort = coursesAndDurationArray.sort((m1,m2)=>m2.monthDuration-m1.monthDuration);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration >5);
//
// console.log(sort);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cards = [
    {cardSuit:"heart"  , value:"6"  , color:"red"},
    {cardSuit:"heart"  , value:"7"  , color:"red"},
    {cardSuit:"heart"  , value:"8"  , color:"red"},
    {cardSuit:"heart"  , value:"9"  , color:"red"},
    {cardSuit:"heart",   value:"10"  ,color:"red"},
    {cardSuit:"heart" ,  value:"J" ,  color:"red"},
    {cardSuit:"heart"  , value:"Q" ,  color:"red"},
    {cardSuit:"heart"  , value:"K" ,  color:"red"},
    {cardSuit:"heart"  , value:"A"  , color:"red"},
    {cardSuit:"diamond" ,value:"6"  , color:"red"},
    {cardSuit:"diamond" ,value:"7"  , color:"red"},
    {cardSuit:"diamond" ,value:"8"  , color:"red"},
    {cardSuit:"diamond" ,value:"9"  , color:"red"},
    {cardSuit:"diamond" ,value:"10"  ,color:"red"},
    {cardSuit:"diamond" ,value:"J"  , color:"red"},
    {cardSuit:"diamond" ,value:"Q"  , color:"red"},
    {cardSuit:"diamond" ,value:"K"  , color:"red"},
    {cardSuit:"diamond" ,value:"A"  , color:"red"},
    {cardSuit:"spade"   ,value: "6" , color:"black"},
    {cardSuit:"spade"   ,value: "7" , color:"black"},
    {cardSuit:"spade"   ,value: "8" , color:"black"},
    {cardSuit:"spade"   ,value: "9" , color:"black"},
    {cardSuit:"spade"   ,value: "10" ,color:"black"},
    {cardSuit:"spade"   ,value: "J" , color:"black"},
    {cardSuit:"spade"   ,value: "Q" , color:"black"},
    {cardSuit:"spade"   ,value: "K" , color:"black"},
    {cardSuit:"spade"   ,value: "A" , color:"black"},
    {cardSuit:"clubs"  ,value: "6" , color:"black"},
    {cardSuit:"clubs"  ,value: "7" , color:"black"},
    {cardSuit:"clubs"  ,value: "8" , color:"black"},
    {cardSuit:"clubs"  ,value: "9" , color:"black"},
    {cardSuit:"clubs"  ,value: "10" ,color:"black"},
    {cardSuit:"clubs"  ,value: "J" , color:"black"},
    {cardSuit:"clubs"  ,value: "Q" , color:"black"},
    {cardSuit:"clubs"  ,value: "K" , color:"black"},
    {cardSuit:"clubs"  ,value: "A" , color:"black"}
];
let filter1 = cards.filter(value => value.cardSuit==="spade" && value.value ==="A");
console.log(filter1);
let filter2 = cards.filter(value => value.value ==="6");
console.log(filter2);
let filter3 = cards.filter(value => value.color ==="red");
console.log(filter3);
let filter4 = cards.filter(value => value.cardSuit ==="diamond");
console.log(filter4);
let filter5 = cards.filter(value => value.cardSuit ==="clubs" && value.value >= "9");
console.log(filter5);
