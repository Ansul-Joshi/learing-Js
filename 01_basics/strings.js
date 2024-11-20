const name  = "name"
const repoCount = 50

console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //sting interpolation

const gamename = new String('Ansul-joshi') // index deta hai 
console.log(gamename)

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newstr = gamename.substring(0,4)
console.log(newstr);
const astr = gamename.slice(-8,4)
console.log(astr);
const newStringOne = "  Ansul   "
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://Ansul.com/ansul%20Joshi"

console.log(url.replace('%20','_'));

console.log(url.includes('https'));

console.log(gamename.split(''));

