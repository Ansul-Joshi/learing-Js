// singleton :- there is only on instance
//if we declare using laterals then it is no signletons

//object literals

//Object.create //constrctor method

const mysym = Symbol("key1")

const jsuser ={
"full name":"Ansul Joshi",
[mysym]:"mykey1",
name:"Ansul",
age : 20,
location: "Mumbai",
email : "joshi@gmail.com",
islogin : true
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser.mysym);
// console.log(typeof (jsuser.mysym));
// console.log(jsuser[mysym]);


jsuser.email="Ansul@gmial.com"

//Object.freeze(jsuser)

// console.log(jsuser);


jsuser.greetings = function(){
    console.log("hello !!!")
}

jsuser.greetingstwo = function(){
    console.log(`Hello ${this.name}`)
}

console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());
