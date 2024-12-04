// // // const coding =["js","ruby","java","python","cpp"]
// // // const values = coding.forEach((item) => {
// // //     return item
// // // })
// // // console.log(values);


// nums = [1,2,3,4,5,6,7,8,9,10]

// // const newnums =nums.filter((num)  => {
// //     return num>4
// // })
// // console.log(newnums);

// const newnums = []
// nums.forEach((i)=>{
// if(i>4){
//     newnums.push(i)
// }
// })

// console.log(newnums);


const mynums =[1,2,34,5,6,7,8,9,10]
// const newnums = mynums.map((num)=>{return num+10})

const newnums = mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>{return num>=40})
console.log(newnums);
