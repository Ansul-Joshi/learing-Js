// class user{
//     constructor(email,password){
//         this.email = email
//         this.password = password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(vlaue){
//         this._email = vlaue
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(vlaue){
//         this._password = vlaue
//     }}

// const ans = new user("ansul@gmail.com","Abc")
// console.log(ans.email)

//old way


// function user(email , password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,'email', {
//         get : function () {
//             return this._email.toUpperCase()
//         },
//         set : function (value) {
//             this._email = value
//         }
//     })
// }

// const chai = new user("ansul@gmial.com","chai")

// console.log(chai.email);


const user = {
    _email:'h@fenafi',
    _password : "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);
