const marvelhero=["thor","ironman","spiderman"]
const dc= ["superman","batman","flash"]


// if do marvelhero.push(dc) it means that array insert dc as a whole array as a element 
//of array

// marvelhero.push(dc) -------->push/
// console.log(marvelhero)  //output is :[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]


//concat------->

const allhero=marvelhero.concat(dc)
console.log(allhero)   //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]



//spread operator :  ...

const all_newhero= [...allhero ,...dc]

//spread ho gya ab ek ek element milega aur vo saare all_newhero m aa jayenge

// console.log(all_newhero)
/*[
  'thor',      'ironman',
  'spiderman', 'superman',
  'batman',    'flash',
  'superman',  'batman',
  'flash'
]*/


// Mtlb kuch diya ushe array m convert krna ho toh kase krenge!!

// Using the "from ": we can convert it into array

console.log(Array.from("abhishek"))
/*[
  'a', 'b', 'h',
  'i', 's', 'h',
  'e', 'k'
] */


//Understanding about the of
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))  //output :[ 100, 200, 300 ]