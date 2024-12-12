// // const user = {
// //     usernmae: "Ansul",
// //     logincount : 8,
// //     signedIn : true,
// //     getuserdetails : function(){
// //         // console.log(`username ${this.usernmae}`);
// //         console.log(this);
        
// //     }
// // }

// // console.log(user.getuserdetails());


// // const promiseone = new Promise()
// // const date = new Date() // new is use to create new context 

// function user(username , logincount,islogedin) {
//    this.username = username 
//    this.logincount = logincount
//    this.islogedin = islogedin
//     function greeting() {
//         console.log(this.username);
        
//     }
//    //return this -> not complusory
// }

// //new gives a copie of the object so it doesnt get overide
// const userOne =new user("Ansul",8,true)
// const usertwo =new user("joshi",3,false)
// console.log(userOne.constructor); // constructor is the reference of the class
// // console.log(usertwo);

// //new keywork create a new object 
// // a constructor is called due to new keyword -> it packs the argument into the function
// //this key k ander inject ho jata hai


function multi(num){
    return num*5
}

multi.power = 2
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function createUser(username,score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea = new  createUser("tea",250)

chai.printme();
