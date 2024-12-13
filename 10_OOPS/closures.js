// //closure :- inner function get the access of the scope of the  outer function

// function parent(){
//     const share = "icecreame"

//     function child1 (){
//         const myprop = "toffie"
//         console.log(share)
//     }
//     function child2 (){
//         console.log(share)
//         console.log(myprop);
        
//     }
//     //console.log(myprop);
//     child2()
    
// }

// parent()




function outer(){
    const name = "Ansul"
function display(){
    console.log(name);  
}
return display
}

const svwv = outer()
console.log(svwv);
