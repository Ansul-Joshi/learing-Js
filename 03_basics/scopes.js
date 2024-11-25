let a = 300
if(true){
    let a  = 10
    const b =20
   // var c =30
    console.log("inner : ", a);
    
}

console.log(a);
//console.log(b);
//console.log(c);

//brower and env have differnt global scope

// function one(){
//     const username="Ansul"
//     function two() {
//         const website= 'youtube'
//         console.log(username);
        
//     }
//     //console.log(website); //error scope
//     two()
// }
// one()

//closure :- parentvariable can be accesed by the chile but not vivevarsa

// if(true){
//     const un="Ansul"
//     if(un === "Ansul"){
//         const ws = "yt"
//         console.log(un + ws);
        
//     }
   // console.log(ws);
    


//console.log(un);


// ++++++++++++++++++==intersting +++++++++++++++++++++++++++++//
console.log(addone(6))
addone(6)
function addone(num) {
    return num+1
}

addone(5)

//console.log(addtwo(5)); //eroor due to how functin is written


const addtwo = function(num) {
    return num+2
}

addtwo(5)



