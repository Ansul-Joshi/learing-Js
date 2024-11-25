const user = {
    username : "Ansul",
    price : 999,

    welcmsg : function name() {
        console.log(`${this.username} welcome to website`);
        console.log(this); 
    }
}
//this keyword is to get current context

// user.welcmsg()
//  user.username="Joshi"
//  user.welcmsg()

// console.log(this);
//for node this value gives {} empty obj in browser it gives windows

// function chai() {
//     console.log(this.username);   
// }
// chai()


const chai = () => {
    console.log(this);  
}
chai()

// const addtwo =(num1,num2) => {
//     return num1 + num2
// }
// const add = (n1,n2) => (n1+n2)


const addtwo = (num1 ,num2) => ({user:"Ansul"})

console.log(addtwo(3,4));
 const myArray = [2,54,6,4,6]

 myArray.forEach(() =>{})


