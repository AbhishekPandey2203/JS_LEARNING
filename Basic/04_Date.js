// understanding about the date 


let mydate=new Date()   //ye ek object h
console.log(mydate);
//output aye h :  2024-07-20T12:09:13.163Z
console.log(mydate.toString())

//output aye h: Sat Jul 20 2024 17:39:13 GMT+0530 (India Standard Time)

console.log(mydate.toDateString())
//output :Sat Jul 20 2024

let mycreatedate=new Date("2023-01-14")
console.log(mycreatedate.toLocaleString())   //date aur time dono
// 14/1/2023, 5:30:00 am


// timestamp
let timestamp = Date.now()
//miilisecond ayega
console.log(Math.floor(Date.now()/1000))