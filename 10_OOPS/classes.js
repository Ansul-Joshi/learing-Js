// // // //ES6

// // // // class User{
// // // //     constructor(username , email, password){
// // // //         this.username=username
// // // //         this.email = email
// // // //         this.password = password
// // // //     }


// // // //     encryptpassword(){
// // // //         return `${this.password}abc`
// // // //     }

// // // //     changeUSername(){
// // // //         return `${this.username.toUpperCase()}`
// // // //     }
// // // // }

// // // // const chai = new User("Ansul","ansul@gmailcom",'123')
// // // // console.log(chai.encryptpassword());
// // // // console.log(chai.changeUSername());

// // // //behinde the scene

// // // function users(username , email, password){
// // //     this.username=username
// // //     this.email = email
// // //     this.password = password
// // // }

// // // users.prototype.encryptpassword = function(){
// // //     return `${this.password}abc`
// // // }

// // // users.prototype.changeUSername = function(){
// // //     return `${this.username.toUpperCase()}`
// // // }

// // // const tea = new users("Joshi", "joshi@gmailcom","913123")
// // // console.log(tea.changeUSername());
// // // console.log(tea.encryptpassword());




// // //inhertance


// // class user{
// //     constructor(username){
// //         this.username = username
// //     }

// //     logme(){
// //         console.log(`Username is ${this.username}`);
        
// //     }
// // }

// // class teacher extends user{
// //     constructor(username,email,password){
// //         super(username)
// //         this.email =email
// //         this.password = password
// //     }

// //     addcourse(){
// //         console.log(`A new course was add by ${this.username}`);
        
// //     }
// // }

// // const chai = new teacher("chai","chai@gmail.com","123")
// // const tea = new user("Ansul")
// // console.log(tea.logme());

// // console.log(chai.addcourse());



// class user{
//     constructor(username){
//         this.username = username
//     }
//     logme(){
//         return`username :${this.username} `
//     }

//     static createid(){
//         return '123'
//     }
// }

// class teacher extends user{
//     constructor(username ,email){
//         super(username)
//         this.email = email
//     }
// }

// const ansul = new user("Ansul")

// const joshi = new teacher("Joshi","joshi@gmail.com")
// console.log(ansul.logme());
// console.log(joshi.logme());

