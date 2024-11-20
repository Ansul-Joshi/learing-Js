//dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);


// let mynewdate = new Date(2023 , 0, 23)
// let mynewdate = new Date("2023-01-14")
let mynewdate = new Date("01-23-2023")

// console.log(mynewdate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let ndate = new Date()
console.log(ndate.getDay());


// ndate.toLocalString('default', {
//     weekday:'long',
// })



