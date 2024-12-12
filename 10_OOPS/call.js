function Setusername(Username) {
    this.username = Username
    console.log("called");
    
}

function createusern(username,email,password) {
    Setusername.call(this,username)

    this.email=email
    this.password = password
}

const chai = new createusern("chai","Ansul@123","123")
console.log(chai);
