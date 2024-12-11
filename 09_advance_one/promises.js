// // promis is an obj that get enventually complete or fail
// // Q and bluebird was used before promises
// const promisOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB calls , cryptograpghy , network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })
// promisOne.then(function () {
//     console.log("promise consumed");
    
// })


// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("task 2");
//         resolve()
//     },1000)
// }).then(function () {
//     console.log();
//     console.log("Async 2 reloved");
    
// })




// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve({
//             name :"Ansul",
//             age :20
//         })
//     },1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
    
// })


// const promiseFour = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         let error = true
//         if(!error){
//             resolve({name : "Ansul", rollno :9130})
//         }else{
//             reject('Error : something went wrong')
//         }
//     },1000)
// })

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.name
    
// }).then((username)=>{
//     console.log(username);
    
// }).catch((err)=>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected");
    
// })



// const promiseFive = new Promise((resolve,reject)=>{
//     let error = true
//     if(!error){
//         resolve({username : "Ansul ", rollno : 9130})
//     }else{
//         reject("error")
//     }
// },1000)

// async function consumeFive() {
//     try{
//         const reponse = await promiseFive
//         console.log(reponse);
//     }catch{
//         console.log("errro catch");
        
//     }
   
    
// }

// consumeFive()


// async function getalluser() {
//     try {
//         const reponse = await fetch("https://api.github.com/users/hiteshchoudhary")  
//     const data =await reponse.json()
//     console.log(data);
//     } catch (error) {
//         console.log("error",error);  
//     }
// }

// getalluser()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((reponse)=>{
    return reponse.json()
}).then((data)=>{
    console.log(data);
})








