const myArr=[0,1,2,4,5,6]

const myhero=["salman","shaktiman"]

const myarr2=new Array( 1,2,3,)
// console.log(myarr2)

//array are resizeable , contain mixture
//copy-oepration create shallow copy: same reference point
//deep copy: do not share the same reference point

//add value in array-->push usage

myarr2.push(4)
// console.log(myarr2)


//last value remove krna using the pop-->

myarr2.pop()

//unshift use to add at the front of array
//shift use to shift at the last of the array


//boolean type result

//value not exist gives : -1 as result
// console.log(myarr2.indexOf(5))


//acha join ke help se array jo h vo bind ho gya as well type of bhi change
//hogya : now as "String" hogya h

const newArr=myarr2.join()
// console.log(newArr)          // 1,2,3 not [1,2,3]
// console.log(typeof newArr)   //result as:string


//Understand about the "Slice" and "splice"

// Slice: m original same rhte h not manipulate
console.log(myArr)
const myslice= myArr.slice(1,3)
//yani 1 se but last 3rd ko inclue nhi krna h  1,2

console.log(myslice)

//Understand about the "Splice" : In splice generally original array also change
const mysplice = myArr.splice(1,3)
console.log("Splice",myArr)
console.log(mysplice)


