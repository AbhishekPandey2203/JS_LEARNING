/*
   Understanding about the Memory concept in js

  two types : primitive type 
   second one:non-primitive type

   stack and heap memory

  -- stack is used by primitive ->copy milta h

  -- heap is used by non primitive ->refernce milta h 


*/
 // understanding about the concept of stack
let myutubename="abhishekutuber"  //primitive type
 

//cpy bnegii
let anothername=myutubename

anothername="chaiaurcode"  
//mano mane change kiya anothername->ab kya ye myutubename m chnage krega

//but asa nhi ye nhi kr payega change >
//yes this is a understanding of stack cpy bnti h isme

console.log(anothername)  //yaha chaiaurcode
console.log(myutubename) //yaha abhishek




//heap  - -->object jayega refernce jayega

let userOne={
    email:"user1@gamil.com",
    upi:"user@ybl"
}

let userTwo=userOne;

//usertwo krega change h na smjo   >>refernce concept ko
userTwo.email="user4@gmail.com"

//>>> yaad rkho userone m bhi change hoga  >>due to reference concept 
console.log(userOne.email)
console.log(userTwo.email)

