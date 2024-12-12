 let myName  = "Ansul        "

// console.log(myName.truelength);


let arr = [ "thor", "spiderman"]

let heropower = {
    thor :"hammer",
    spider:"slang",

    getspidypower:function(){
        console.log(`spidy power is ${this.spider}`);
        
    }
}

Array.prototype.ansul = function(){
    console.log("Ansul is prent in all obj");
    
}

// heropower.ansul()
// arr.ansul()

const user = {
    name :"chai",
    email:"chai@google.com"
}

const teacher ={
    makevideo:"true"
}
const teachingsupport = {
    isavailable:"false"
}
const TASupport ={
    makeAssignment :"JS",
    fullTime:true,
    __proto__:teachingsupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername = "joshi     "

String.prototype.truelength = function () {
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log("true name is ", this.trim().length);  
}

anotherusername.truelength()
myName.truelength()
"deepak".truelength()