//understanding about the no 

const score=400
console.log(score)   //it repersent as 400

//another way to declare it 

const number=new Number(100) //asa krne se hume number ki kuch property mil jati h
console.log(number)         //it print as [Number:100]

//property
console.log(number.toString())

//tofixed : jitne value . ke baad chye vo

//toPercision: precise value chye priority decimal ke phele wale value

const hundreds=10000000
console.log(hundreds.toLocaleString());
//for indian standard
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++Maths+=+++++++++++
console.log(Math)       //obejct h ka ye

//math.random ki value always 0 se 1 ke beeche

console.log((Math.random()*10)+1)

//let understand about the use of math.random on the help of dice function
//dice range 1-6 ke beeche m
const min=1
const max=6
console.log(Math.floor(Math.random()*(max-min+1))+min) //ye help krega humsa ek value bnane m lie between 1 se 6




