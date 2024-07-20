//string as a variable
const name="abhishek"

const repcount=50

console.log(name+repcount+"This is a concation property")


//backtik used in this modern time

console.log(`Hello my name is ${name} and my repo is ${repcount}`)

//string declaration
//string ek object h not array-->
const gameName=new String('abhishekpandey')

//ye ek object h hence a key value pair type h

console.log(gameName[0])

//charat 
console.log(gameName.charAt(2))

//slice and substring

//substring m agr negative value denge bhi toh vo basically vo ushe ignore kr dega and 
//treat krega as zero
//koi fark nhi negative value ka


//trim ://js m hum jasa likhte h vase result milta h
const newstring1="      abhishek      "

console.log(newstring1)   //ab ye baad approach but user kr skta h hence
//we use the trim function to avoid it 
console.log(newstring1.trim())

//replace

//urlencoded : browser space nhi smjta h hence using urlencoded it convert kr denga space ko % m 
const url="https://abhishek.com/abhishek%20pandey"

//replac
console.log(url.replace('%20','-'))
//%20 btata h kisko replace krna h , '-' ki %20 ki jagah kya ana chye



