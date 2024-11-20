const marvel =["thor", "ironman", "spiderman "]
const dc =["batman" , " flash" , "superman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const all = marvel.concat(dc)
// console.log(all);

// const allhero = [...marvel,...dc]
// console.log(allhero);

const num = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const newarr = num.flat(Infinity)
console.log(newarr);
 
console.log(Array.isArray("Ansul"));
console.log(Array.from({name : "Ansul"})); // interesting


let score1 = 100
let score2 = 200
let score3 =300

console.log(Array.of(score1,score2,score3));
