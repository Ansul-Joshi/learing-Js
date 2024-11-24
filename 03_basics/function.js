// function name() {
//     console.log("A");
// console.log("n");
// console.log("s");
// console.log("u");
// console.log("l");
// }

// name()
// reference () -> execute
                 //parameters
function addtwono(num1 , num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

        //arguments
addtwono(3,"a")
const result = addtwono(3,4)
console.log("Result : ",result);

function loginuser(username = "User"){
    if(!username){
        console.log("enter a username");
        return
    }
return `${username} just logged in `
}

console.log(loginuser());
                        //... rest opterator
function calculatecartprice(val1 , val2 , ...num1){
    return num1
}
// 
// 
const user= {
    username :"Ansul",
    price :199
}

function handleobj(anyobj) {
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
handleobj(user)

handleobj({
    username:'joshi',
    price:299
})

const mynewarray = [200,400,500,600]

function returnarr2(getarr) {
    return mynewarray[1]
}

console.log(returnarr2(mynewarray));
