//const tinder = new Object()
const tinder = {}
//console.log(tinder);


tinder.id="1234"
tinder.name="Ansul"
tinder.islogin=false

const reguser = {
    email : "someone@gmail.com",
    fullname :{
        userfullname : {
            firstname : "Ansul",
            latname : "Joshi"
        }
    }
}

console.log(reguser.fullname.userfullname.latname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3=Object.assign({} ,obj1,obj2,obj4)
//                       //target , source.....
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);


//array of objects

const arr =[

{
    id:1,
    email:"ansul@gmail.com"
},
{
    id:2,
    email:"Joshi@gmail.com"
}

]

arr[1].email

// console.log(tinder);
console.log(Object.keys(tinder));

console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('islogined'));
