// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let f1 = document.forms.f1;
// f1.onsubmit =function (e) {
//     let name = f1.name.value;
//     let age = f1.age.value;
//     let obj = {name:name, age:age};
//     localStorage.setItem('user',JSON.stringify(obj));
// }



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let f1 = document.forms.f1;
//   const key = "key";
// f1.onsubmit =function (e) {
//     let model = f1.model.value;
//     let type = f1.type.value;
//     let volume = f1.volume.value;
//     let obj = {model:model, type:type, volume:volume};
//     const store = JSON.parse(localStorage.getItem(key))  || [];
//     store.push(obj);
//     localStorage.setItem('key',JSON.stringify(store));
// }
