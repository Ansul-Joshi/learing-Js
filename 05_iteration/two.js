// // // for of loop
// // // [{},{},{}]
// // // const arr =[1,2,3,4,5]
// // // for (const num of arr) {
// // //     console.log(num);
// // // }
// // // const greet = "Hello world"
// // // for (const g of greet) {
// // //     console.log(g);   
// // // }

// // //Maps 
// // const map = new Map()
// //  map.set('In','India')
// //  map.set('USA', 'america')
// //  map.set('fr',"france")

// // // console.log(map);

// // for(const [k,v] of map){
// //     console.log(k + " "+ v);
// // }
// // // maps are iterable using for of and obj is not

// const myobj ={
//     js:'javascript',
//     cpp :'C++',
//     rb :'ruby',
//     swift :'swith by apple'
// }

// for (const key in myobj) {
//     console.log(`${key} is shortcut is ${myobj[key]}`);
    
// }

const check = ['js','rd','py','java','cpp']
for (const key in check) {
    console.log(`${key} index position :- ${check[key]}`);
    
}