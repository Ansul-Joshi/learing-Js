const myarr = [0,1,2,3,4,5]  //js array is resizeable
const heros =["Ansul","Joshi"]
// console.log(myarr[3]);
//shallow copies :- array with same data if one get change other get change
//deep copies :- dont get changes

// Array methods

// myarr.push(6)
// myarr.push(7)
// console.log(myarr);


myarr.unshift(9) // this is a time consuming as it shift all the values
myarr.shift()
// console.log(myarr);
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

const newarr = myarr.join() // convert the array in to strings
console.log(myarr);
console.log(newarr);

// slice an splice

console.log("A " , myarr)

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log("c" , myarr);
console.log(myn2);





