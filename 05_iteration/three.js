 const coding = ['js','cpp','ruby','python']

// // coding.forEach( function (item){
// //     console.log(item); 
// // }  )

// // coding.forEach(  (item) => {
// // console.log(item);
// // }
// // )

// function print(item) {
//     console.log(item);   
// }

// coding.forEach(print)

// coding.forEach((item, index,array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);  
// });

const mycode = [
    {
        langName : "python",
        filename : "py"
    },
    {
        langName : "Javascript",
        filename : "js"
    }
]

mycode.forEach((item)=>{
    console.log(item.filename); 
})