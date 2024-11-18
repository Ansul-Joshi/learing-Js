// primitive datatype
//primitive data type while processing as copy is given
// there are 7 categories
//string  , Number , Boolean , null , undefined , Symbol , BigInt .

// const score = 100
// const scorevalue = 100.3
// const isloged = false
// const outsideTemp = null
// let email;


// Symbol give unique value and two variable with same value is not same 
// const id = Symbol('123')
// const id2 = Symbol('123')

// console.log(id === id2);  // false

// const bigNumber = 123456789876587655n

//Reference type data type / Non primitive data type
//refrence of the data is given for processing

// Array , Objects , functions
//js is dynamically typed 

const heros = ["shaktiman" , "naagraj" ,"doga"]
let myobj={
    name:"Ansul",
    age:20 ,
}

const myFunction = function(){
console.log("hello world");
}

//type of Non-primitive data type is object

/*****************************************************************************/

//there are two types of memeory used in js
// Stack memeory is use in primitive datatype
//Heap memory is used in non-prmitive datatype

let myname = "Ansul Deepak Joshi"

let mymyname = myname
mymyname = "Joshi Ansul Deepak"
console.log(myname);
console.log(mymyname);

let user1 ={
    email : "user@gmail.com",
    upi : "user@bbl"
}

let user2 =user1

user2.email = "Ansul@gmail.com";

console.log(user1);
console.log(user2);


//stack mai copie bantha hai tho chages different retha hai agar (change in one variable will not effect another variable)
// heap mai 2 different variables ko same same value ka reference miltha hai (change in one variable will effect another variable)


